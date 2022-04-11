module Route.Index exposing (Data, Model, Msg, route)

import Component.Icon as Icon
import DataSource exposing (DataSource)
import DataSource.Http
import Head
import Head.Seo as Seo
import Html as Html exposing (..)
import Html.Attributes as Attr exposing (..)
import Json.Decode as Decode
import Pages.PageUrl exposing (PageUrl)
import Pages.Url
import Path
import RouteBuilder exposing (StatelessRoute, StaticPayload)
import Shared
import View exposing (View)


type alias Model =
    {}


type alias Msg =
    ()


type alias RouteParams =
    {}


type alias Data =
    { message : String }


route : StatelessRoute RouteParams Data
route =
    RouteBuilder.single
        { head = head
        , data = data
        }
        |> RouteBuilder.buildNoState { view = view }


data : DataSource Data
data =
    DataSource.succeed Data
        |> DataSource.andMap
            (DataSource.succeed "Hello!")


head :
    StaticPayload Data RouteParams
    -> List Head.Tag
head static =
    Seo.summary
        { canonicalUrlOverride = Nothing
        , siteName = "elm-pages"
        , image =
            { url = [ "images", "icon-png.png" ] |> Path.join |> Pages.Url.fromPath
            , alt = "elm-pages logo"
            , dimensions = Nothing
            , mimeType = Nothing
            }
        , description = "Welcome to elm-pages!"
        , locale = Nothing
        , title = "elm-pages is running"
        }
        |> Seo.website


view :
    Maybe PageUrl
    -> Shared.Model
    -> StaticPayload Data RouteParams
    -> View Msg
view maybeUrl sharedModel static =
    { title = "elm-pages is running"
    , body = homePage
    }


homePage : Html msg
homePage =
    div
        [ class "relative flex-auto max-w-5xl flex flex-col justify-center pt-20 mx-auto sm:py-24 lg:py-32"
        ]
        [ h1
            [ class "text-4xl font-extrabold tracking-tight text-center text-neutral-100 sm:text-5xl lg:text-6xl"
            ]
            [ text "Discover Events, Find Friendships" ]
        , p
            [ class "max-w-3xl mx-auto mt-6 text-lg text-center text-neutral-400"
            ]
            [ text "Flamingle is a website for people who want to keep their pulse on exciting events happening in their town and meet new people who are going to those events." ]
        , Html.form
            [ action "/form/"
            , class "flex justify-center mt-6 text-sm sm:mt-10"
            ]
            [ label
                [ for "search"
                , class "sr-only"
                ]
                [ text "Search" ]
            , div
                [ class "relative"
                ]
                [ div
                    [ class "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"
                    ]
                    [ Icon.solidSearch
                    ]
                , input
                    [ id "_zip"
                    , name "zip"
                    , pattern "[0-9]{5}"
                    , attribute "data-value" "zip"
                    , class "block pl-12 pr-4 py-4 text-lg border border-opacity-30 border-white rounded-l-md leading-5 bg-neutral-900 placeholder-gray-500 focus:placeholder-gray-400 focus:ring-1 focus:ring-fuchsia-500 focus:border-fuchsia-500"
                    , placeholder "Enter Zip"
                    , type_ "search"
                    ]
                    []
                , input
                    [ id "_date"
                    , name "date"
                    , attribute "data-value" "now"
                    , type_ "date"
                    , hidden True
                    ]
                    []
                ]
            , button
                [ class "block px-6 py-4 text-lg border border-opacity-30 border-white rounded-r-md leading-5 bg-neutral-900 placeholder-gray-500 focus:placeholder-gray-400 focus:ring-1 focus:ring-fuchsia-500 focus:border-fuchsia-500"
                , type_ "submit"
                ]
                [ text "Find Events" ]
            ]
        ]
