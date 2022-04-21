module Api exposing (routes)

import ApiRoute exposing (ApiRoute)
import Color
import DataSource exposing (DataSource)
import DataSource.Http
import Html exposing (Html)
import Json.Decode as Decode
import Json.Encode as Encode
import MimeType
import Pages.Manifest as Manifest
import Pages.Manifest.Category exposing (..)
import Path
import Route exposing (Route)
import Server.Request as Request
import Server.Response as Response
import Site
import Util


routes : DataSource (List Route) -> (Html Never -> String) -> List (ApiRoute.ApiRoute ApiRoute.Response)
routes getStaticRoutes htmlToString =
    [ events
    , requestPrinter
    , signUpForm
    , multipleContentTypes
    , DataSource.succeed manifest
        |> Manifest.generator Site.config.canonicalUrl
    ]


signUpForm : ApiRoute ApiRoute.Response
signUpForm =
    Request.expectFormPost
        (\{ field, optionalField } ->
            Request.map2
                -- Send User Request to Supabase
                (\email password ->
                    DataSource.Http.request
                        { url = "https://raoodzmoztwwwcjydatg.supabase.co/auth/v1/signup"
                        , method = "POST"
                        , headers =
                            [ ( "apikey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQxNTMwMCwiZXhwIjoxOTU4OTkxMzAwfQ.7FNpzHXTJ0EHz2nVfodpdu4mw05Mik1BH8aEQpE6XAU" )
                            , ( "Content-Type", "application/json" )
                            ]
                        , body =
                            [ ( "email", Encode.string email )
                            , ( "password", Encode.string password )
                            ]
                                |> Encode.object
                                |> DataSource.Http.jsonBody
                        }
                        -- Response from Supabase
                        (DataSource.Http.expectJson Decode.value)
                        -- Respond to User
                        -- TODO: Redirect them to the correct place?!?!?!
                        |> DataSource.map Response.json
                )
                (field "email")
                (field "password")
        )
        -- Build Path
        |> ApiRoute.succeed
        |> ApiRoute.literal "api"
        |> ApiRoute.slash
        |> ApiRoute.literal "form"
        |> ApiRoute.slash
        |> ApiRoute.literal "sign-up"
        -- End Builder
        |> ApiRoute.serverRender


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
                (\{ field } ->
                    field "first"
                )
            , Request.expectJsonBody (Decode.field "first" Decode.string)
            , Request.expectQueryParam "first"
            , Request.expectMultiPartFormPost
                (\{ field } ->
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



-- requestEmailSignUp : String -> String -> Cmd Msg
-- requestEmailSignUp email password =
--     Http.request
--         { method = "POST"
--         , headers = [ Http.header "apikey" "SUPABASE_KEY", Http.header "Content-Type" "application/json" ]
--         , url = "https://raoodzmoztwwwcjydatg.supabase.co/auth/v1/signup"
--         , body =
--             (Json.Encode.object >> Http.jsonBody)
--                 [ ( "email", Json.Encode.string email )
--                 , ( "password", Json.Encode.string password )
--                 ]
--         , expect = Http.expectWhatever SignedUp
--         , timeout = Nothing
--         , tracker = Nothing
--         }
