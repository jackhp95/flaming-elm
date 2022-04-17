const path = require("path");
const busboy = require("busboy");
const processedHtml = "<!DOCTYPE html>\n<!-- ROOT --><html lang=\"en\">\n  <head>\n    <!-- PLACEHOLDER_PRELOADS -->\n    <script defer src=\"/elm.js\" type=\"text/javascript\"></script>\n    \n    \n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\n    <title><!-- PLACEHOLDER_TITLE --></title>\n    <meta name=\"generator\" content=\"elm-pages v2.1.11\" />\n    <meta name=\"mobile-web-app-capable\" content=\"yes\" />\n    <meta name=\"theme-color\" content=\"#ffffff\" />\n    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n    <meta\n      name=\"apple-mobile-web-app-status-bar-style\"\n      content=\"black-translucent\"\n    />\n    <!-- PLACEHOLDER_HEAD_AND_DATA -->\n    <script type=\"module\" crossorigin src=\"/assets/index.cfa4b897.js\"></script>\n    <link rel=\"stylesheet\" href=\"/assets/index.4fa688a3.css\">\n  </head>\n  <body>\n    <div data-url=\"\" display=\"none\"></div>\n    <!-- PLACEHOLDER_HTML -->\n  </body>\n</html>";



exports.handler = render;


/**
 * @param {import('aws-lambda').APIGatewayProxyEvent} event
 * @param {any} context
 */
async function render(event, context) {
  const requestTime = new Date();
  console.log(JSON.stringify(event));
  global.staticHttpCache = {};

  const compiledElmPath = path.join(__dirname, "elm-pages-cli.js");
  const compiledPortsFile = path.join(__dirname, "port-data-source.mjs");
  const renderer = require("../../elm-pages/generator/src/render");
  const preRenderHtml = require("../../elm-pages/generator/src/pre-render-html");
  try {
    const basePath = "/";
    const mode = "build";
    const addWatcher = () => {};

    const renderResult = await renderer(
      compiledPortsFile,
      basePath,
      require(compiledElmPath),
      mode,
      event.path,
      await reqToJson(event, requestTime),
      addWatcher,
      false
    );
    console.log("@@@renderResult", JSON.stringify(renderResult, null, 2));

    const statusCode = renderResult.is404 ? 404 : renderResult.statusCode;

    if (renderResult.kind === "bytes") {
      return {
        body: Buffer.from(renderResult.contentDatPayload.buffer).toString("base64"),
        isBase64Encoded: true,
        headers: {
          "Content-Type": "application/octet-stream",
          "x-powered-by": "elm-pages",
          ...renderResult.headers,
        },
        statusCode,
      };
    } else if (renderResult.kind === "api-response") {
      const serverResponse = renderResult.body;
      return {
        body: serverResponse.body,
        multiValueHeaders: serverResponse.headers,
        statusCode: serverResponse.statusCode,
        isBase64Encoded: serverResponse.isBase64Encoded,
      };
    } else {
      console.log('@rendering', preRenderHtml.replaceTemplate(processedHtml, renderResult.htmlString))
      return {
        body: preRenderHtml.replaceTemplate(processedHtml, renderResult.htmlString),
        headers: {
          "Content-Type": "text/html",
          "x-powered-by": "elm-pages",
          ...renderResult.headers,
        },
        statusCode,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      body: `<body><h1>Error</h1><pre>${error.toString()}</pre></body>`,
      statusCode: 500,
      headers: {
        "Content-Type": "text/html",
        "x-powered-by": "elm-pages",
      },
    };
  }
}

/**
 * @param {import('aws-lambda').APIGatewayProxyEvent} req
 * @param {Date} requestTime
 * @returns {Promise<{ method: string; hostname: string; query: Record<string, string | undefined>; headers: Record<string, string>; host: string; pathname: string; port: number | null; protocol: string; rawUrl: string; }>}
 */
function reqToJson(req, requestTime) {
  return new Promise((resolve, reject) => {
    if (
      req.httpMethod && req.httpMethod.toUpperCase() === "POST" &&
      req.headers["content-type"] &&
      req.headers["content-type"].includes("multipart/form-data") &&
      req.body
    ) {
      try {
        console.log('@@@1');
        const bb = busboy({
          headers: req.headers,
        });
        let fields = {};

        bb.on("file", (fieldname, file, info) => {
          console.log('@@@2');
          const { filename, encoding, mimeType } = info;

          file.on("data", (data) => {
            fields[fieldname] = {
              filename,
              mimeType,
              body: data.toString(),
            };
          });
        });

        bb.on("field", (fieldName, value) => {
          console.log("@@@field", fieldName, value);
          fields[fieldName] = value;
        });

        // TODO skip parsing JSON and form data body if busboy doesn't run
        bb.on("close", () => {
          console.log('@@@3');
          console.log("@@@close", fields);
          resolve(toJsonHelper(req, requestTime, fields));
        });
        console.log('@@@4');
        
        if (req.isBase64Encoded) {
          bb.write(Buffer.from(req.body, 'base64').toString('utf8'));
        } else {
          bb.write(req.body);
        }
      } catch (error) {
        console.error('@@@5', error);
        resolve(toJsonHelper(req, requestTime, null));
      }
    } else {
      console.log('@@@6');
      resolve(toJsonHelper(req, requestTime, null));
    }
  });
}

/**
 * @param {import('aws-lambda').APIGatewayProxyEvent} req
 * @param {Date} requestTime
 * @returns {{method: string; rawUrl: string; body: string?; headers: Record<string, string>; requestTime: number; multiPartFormData: unknown }}
 */
function toJsonHelper(req, requestTime, multiPartFormData) {
  return {
    method: req.httpMethod,
    headers: req.headers,
    rawUrl: req.rawUrl,
    body: req.body,
    requestTime: Math.round(requestTime.getTime()),
    multiPartFormData: multiPartFormData,
  };
}
