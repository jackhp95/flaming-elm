module Route.Index exposing (ActionData, Data, Model, Msg, route)

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
    -> View msg
view maybeUrl sharedModel static =
    { title = "Flamingle | Find Events, Make Friends"
    , body = homePage
    }


homePage : Html msg
homePage =
    div
        [ class "relative mx-auto flex max-w-md flex-auto flex-col justify-center px-4 pt-20 sm:py-24 lg:py-32"
        ]
        [ h1
            [ class "whitespace-pre-wrap text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            , class "animate-move-bg bg-gradient-to-r from-rose-500 via-fuchsia-500 to-rose-500 bg-[length:400%] bg-clip-text text-transparent"
            ]
            [ text "Find Events, \nMake Friends" ]
        , p
            [ class "mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-neutral-300"
            ]
            [ text "Flamingle is a website for people who want to keep their pulse on exciting events happening in their town and meet new people who are going to those events." ]
        , Html.form
            [ action "/events/"
            , class "-mx-1 mt-6 flex justify-center text-sm"
            ]
            [ label
                [ for "search"
                , class "sr-only"
                ]
                [ text "Search" ]
            , div
                [ class "relative flex flex-auto"
                ]
                [ div
                    [ class "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-white mix-blend-difference"
                    ]
                    [ Icon.solidSearch
                    ]
                , input
                    [ id "postal-code"
                    , name "zip"
                    , Attr.attribute "autocomplete" "postal-code"
                    , pattern "[0-9]{5}"
                    , class "block w-48 flex-auto rounded-l-md border border-white border-opacity-30 bg-neutral-900 py-4 pl-12 pr-4 leading-5 placeholder-neutral-500 hover:border-opacity-50 focus:border-fuchsia-500 focus:placeholder-neutral-400 focus:ring-1 focus:ring-fuchsia-500"
                    , placeholder "Enter Zip"
                    , type_ "search"
                    ]
                    []
                ]
            , button
                [ class "-ml-px block whitespace-nowrap rounded-r-md border border-white border-opacity-30 bg-neutral-900 px-6 py-4 font-bold leading-5 hover:z-10 hover:border-opacity-50 focus:z-10 focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500"
                , type_ "submit"
                ]
                [ text "Find Events" ]
            ]
        ]
