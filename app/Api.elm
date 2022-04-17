module Api exposing (routes)

import ApiRoute exposing (ApiRoute)
import Color
import DataSource exposing (DataSource)
import Head
import Head.Seo as Seo
import Head.Twitter as Twitter
import Html exposing (Html)
import Json.Decode as Decode
import Json.Encode as Encode
import MimeType
import Pages
import Pages.Manifest as Manifest
import Pages.Manifest.Category exposing (..)
import Pages.Url
import Path
import Result.Extra
import Route exposing (Route)
import Server.Request as Request
import Server.Response as Response exposing (Response)
import Site
import SiteConfig exposing (SiteConfig)
import Util


routes : DataSource (List Route) -> (Html Never -> String) -> List (ApiRoute.ApiRoute ApiRoute.Response)
routes getStaticRoutes htmlToString =
    [ events
    , requestPrinter
    , multipleContentTypes
    , DataSource.succeed manifest
        |> Manifest.generator Site.config.canonicalUrl
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
        { name = "https://www.FlamingleSocial.com"
        , description = "Flamingle is for people who want to keep their pulse on exciting events happening in their town and meet new people."
        , startUrl = Path.fromString "./"
        , icons =
            [ { src = Util.logoIcon
              , sizes =
                    [ ( 16, 16 )
                    , ( 32, 32 )
                    , ( 96, 96 )
                    , ( 180, 180 )
                    , ( 300, 300 )
                    , ( 512, 512 )
                    ]
              , mimeType = Just (MimeType.OtherImage "svg+xml")
              , purposes = [ Manifest.IconPurposeAny, Manifest.IconPurposeMaskable ]
              }
            ]
        }
        |> Manifest.withShortName "Flamingle"
        |> Manifest.withCategories [ lifestyle, entertainment, music, social, sports, travel ]
        |> Manifest.withThemeColor Color.white
        -- (Color.rgb 244 63 94)
        |> Manifest.withBackgroundColor Color.black
        |> Manifest.withDisplayMode Manifest.Standalone
