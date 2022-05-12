module Route.Index exposing (Data, Model, Msg, ActionData, route)

import Component.Icon as Icon
import DataSource exposing (DataSource)
import Head
import Html exposing (..)
import Html.Attributes as Attr exposing (..)
import Pages.PageUrl exposing (PageUrl)
import RouteBuilder exposing (StatelessRoute, StaticPayload)
import Shared
import Site
import View exposing (View)


type alias Model =
    {}


type alias Msg =
    ()


type alias ActionData =
    {}

type alias RouteParams =
    {}


type alias Data =
    { message : String }


route : StatelessRoute RouteParams Data action
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
    StaticPayload Data action RouteParams
    -> List Head.Tag
head static =
    Site.head


view :
    Maybe PageUrl
    -> Shared.Model
    -> StaticPayload Data action RouteParams
    -> View Msg
view maybeUrl sharedModel static =
    { title = "Flamingle | Find Events, Make Friends"
    , body = homePage
    }


homePage : Html msg
homePage =
    div
        [ class "relative flex-auto max-w-md flex flex-col justify-center pt-20 mx-auto px-4 sm:py-24 lg:py-32"
        ]
        [ h1
            [ class "text-4xl font-bold tracking-tight whitespace-pre-wrap md:text-5xl lg:text-6xl"
            , class "animate-move-bg bg-gradient-to-r from-rose-500 via-fuchsia-500 to-rose-500 bg-[length:400%] bg-clip-text text-transparent"
            ]
            [ text "Find Events, \nMake Friends" ]
        , p
            [ class "max-w-3xl mx-auto mt-6 leading-relaxed text-sm text-neutral-300"
            ]
            [ text "Flamingle is a website for people who want to keep their pulse on exciting events happening in their town and meet new people who are going to those events." ]
        , Html.form
            [ action "/events/"
            , class "-mx-1 flex justify-center mt-6 text-sm"
            ]
            [ label
                [ for "search"
                , class "sr-only"
                ]
                [ text "Search" ]
            , div
                [ class "flex-auto flex relative"
                ]
                [ div
                    [ class "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none mix-blend-difference text-white"
                    ]
                    [ Icon.solidSearch
                    ]
                , input
                    [ id "postal-code"
                    , name "zip"
                    , Attr.attribute "autocomplete" "postal-code"
                    , pattern "[0-9]{5}"
                    , class "w-48 flex-auto block pl-12 pr-4 py-4 border hover:border-opacity-50 border-opacity-30 border-white rounded-l-md leading-5 bg-neutral-900 placeholder-neutral-500 focus:placeholder-neutral-400 focus:ring-1 focus:ring-fuchsia-500 focus:border-fuchsia-500"
                    , placeholder "Enter Zip"
                    , type_ "search"
                    ]
                    []
                ]
            , button
                [ class "block px-6 py-4 border font-bold whitespace-nowrap hover:z-10 focus:z-10 -ml-px hover:border-opacity-50 border-opacity-30 border-white rounded-r-md leading-5 bg-neutral-900 focus:ring-1 focus:ring-fuchsia-500 focus:border-fuchsia-500"
                , type_ "submit"
                ]
                [ text "Find Events" ]
            ]
        ]
