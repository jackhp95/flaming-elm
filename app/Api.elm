module Api exposing (routes)

import ApiRoute exposing (ApiRoute)
import DataSource exposing (DataSource)
import Html exposing (Html)
import Json.Decode as Decode
import Json.Encode as Encode
import Pages
import Pages.Manifest as Manifest
import Result.Extra
import Route exposing (Route)
import Server.Request as Request
import Server.Response as Response exposing (Response)


routes : DataSource (List Route) -> (Html Never -> String) -> List (ApiRoute.ApiRoute ApiRoute.Response)
routes getStaticRoutes htmlToString =
    [ events
    , requestPrinter
    , multipleContentTypes
    ]


multipleContentTypes : ApiRoute ApiRoute.Response
multipleContentTypes =
    ApiRoute.succeed
        (Request.oneOf
            [ Request.map
                (\decodedValue ->
                    decodedValue
                        |> Response.plainText
                        |> DataSource.succeed
                )
                (Request.expectJsonBody (Decode.at [ "path", "to", "string", "value" ] Decode.string))
            ]
        )
        |> ApiRoute.literal "api"
        |> ApiRoute.slash
        |> ApiRoute.literal "multiple-content-types"
        |> ApiRoute.serverRender


requestPrinter : ApiRoute ApiRoute.Response
requestPrinter =
    ApiRoute.succeed
        (Request.map4
            (\rawBody method cookies queryParams ->
                Encode.object
                    [ ( "rawBody"
                      , Maybe.map Encode.string rawBody
                            |> Maybe.withDefault Encode.null
                      )
                    , ( "method"
                      , method |> Request.methodToString |> Encode.string
                      )
                    , ( "cookies"
                      , cookies |> Encode.dict identity Encode.string
                      )
                    , ( "queryParams"
                      , queryParams |> Encode.dict identity (Encode.list Encode.string)
                      )
                    ]
                    |> Response.json
                    |> DataSource.succeed
            )
            Request.rawBody
            Request.method
            Request.allCookies
            Request.queryParams
        )
        |> ApiRoute.literal "api"
        |> ApiRoute.slash
        |> ApiRoute.literal "request-test"
        |> ApiRoute.serverRender


events : ApiRoute ApiRoute.Response
events =
    ApiRoute.succeed
        (Request.oneOf
            [ Request.expectFormPost
                (\{ field, optionalField } ->
                    field "first"
                )
            , Request.expectJsonBody (Decode.field "first" Decode.string)
            , Request.expectQueryParam "first"
            , Request.expectMultiPartFormPost
                (\{ field, optionalField } ->
                    field "first"
                )
            ]
            |> Request.map
                (\firstName ->
                    Response.plainText ("Hello " ++ firstName)
                        |> DataSource.succeed
                )
        )
        |> ApiRoute.literal "api"
        |> ApiRoute.slash
        |> ApiRoute.literal "events"
        |> ApiRoute.serverRender


manifest : Manifest.Config
manifest =
    Manifest.init
        { name = "Site Name"
        , description = "Description"
        , startUrl = Route.Index |> Route.toPath
        , icons = []
        }
