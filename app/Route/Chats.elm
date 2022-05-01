module Route.Chats exposing (Data, Model, Msg, route)

import Component.Auth as Auth
import Component.Icon as Icon
import DataSource exposing (DataSource)
import Head
import Html exposing (..)
import Html.Attributes exposing (..)
import Pages.PageUrl exposing (PageUrl)
import Pages.Url
import Path
import Route
import RouteBuilder exposing (StatelessRoute, StaticPayload)
import Shared
import Site
import Util
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


head : StaticPayload Data RouteParams -> List Head.Tag
head static =
    Site.head


view : Maybe PageUrl -> Shared.Model -> StaticPayload Data RouteParams -> View Msg
view maybeUrl sharedModel static =
    { title = "Flamingle | Find Events, Make Friends"
    , body =
        article [ class "flex max-h-[calc(100vh-4rem)] items-stretch" ]
            [ chats
            , chat
            ]
    }


chats : Html msg
chats =
    section [ class "flex-auto w-full max-w-md ring flex flex-col items-stretch" ]
        [ h1 [] [ text "Inbox" ]
        , menu [] [ input [ type_ "search" ] [] ]
        , { name = "Person Name"
          , id = "personID"
          , headBubble = { text = "message text goes here, possibly truncated." }
          , avatar = "url for avatar"
          }
            |> List.repeat 10
            |> List.map (\{ name, id, headBubble, avatar } -> li [] [ text name ])
            |> nav [ class "min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8" ]
        ]


chat : Html msg
chat =
    article [ class "flex-auto w-full max-w-md ring flex flex-col items-stretch" ]
        [ header [ class "flex gap-4" ]
            [ a [] [ text "back" ]
            , a [] [ text "person" ]
            , a [] [ text "menu" ]
            ]
        , List.repeat 50 ()
            |> List.indexedMap
                (\i bubble ->
                    let
                        yourself =
                            modBy 2 i == 0
                    in
                    li
                        [ class "max-w-[80%] px-4 py-3 rounded-xl bg-gradient-to-b bg-fixed"
                        , classList
                            [ ( "from-neutral-700 to-neutral-900 self-end rounded-br-none", yourself )
                            , ( "from-blue-500 to-blue-700 self-start rounded-bl-none", not yourself )
                            ]
                        ]
                        [ text "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque laborum, illo sapiente eos optio doloremque! Corporis quisquam eius debitis provident voluptatibus alias. Soluta, veniam. Sequi quod saepe minima hic!" ]
                )
            |> ol [ class "flex flex-col gap-3 p-2 relative text-sm leading-tight" ]
        ]
