module Route.Chats exposing (ActionData, Data, Model, Msg, route)

import Component.Auth as Auth
import Component.Icon as Icon
import DataSource exposing (DataSource)
import Dict exposing (Dict)
import Head
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)
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


type alias ActionData =
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


head : StaticPayload Data action RouteParams -> List Head.Tag
head static =
    Site.head


view : Maybe PageUrl -> Shared.Model -> StaticPayload Data action RouteParams -> View msg
view maybeUrl sharedModel static =
    { title = "Flamingle | Find Events, Make Friends"
    , body =
        article [ class "relative flex max-h-[calc(100vh-4rem)] max-w-full snap-both snap-mandatory items-stretch overflow-x-auto pt-px sm:max-h-screen" ]
            [ chats
            , chat
            ]
    }


ringAvatar : Html msg
ringAvatar =
    div [ class "flex h-[3em] w-[3em] scale-105 items-center justify-center rounded-full bg-gradient-to-tl from-rose-500 to-fuchsia-500 ring ring-black transition ease-out hover:scale-100 hover:bg-gradient-to-t" ]
        [ div
            [ class "h-[3em] w-[3em] scale-90 rounded-full bg-neutral-700 ring-1 ring-black transition ease-out hover:scale-75 hover:ring" ]
            [ img [ src "", alt "" ] [] ]
        ]


chats : Html msg
chats =
    article [ class "relative flex w-full max-w-md flex-auto flex-shrink-0 snap-center flex-col items-stretch overflow-y-auto overflow-x-hidden" ]
        [ header [ class "sticky top-0 z-10 flex w-full justify-between bg-black bg-opacity-80 p-4 text-lg font-bold backdrop-blur" ]
            [ h1 [ class "leading-none" ] [ text "Inbox" ]
            , nav [ class "flex gap-2" ]
                [ a [ href "#", class "icon rounded-full bg-white bg-opacity-20 hover:bg-opacity-80" ] []
                , a [ href "#", class "icon rounded-full bg-white bg-opacity-20 hover:bg-opacity-80" ] []
                ]
            ]
        , a
            [ href "#"
            , class "mx-4 my-2 flex items-center gap-2 rounded-md border border-white border-opacity-30 bg-neutral-900 bg-opacity-10 px-4 py-3 leading-5 opacity-80"
            , class "placeholder-neutral-500 focus:border-fuchsia-500 focus:bg-opacity-100 focus:placeholder-neutral-400 focus:ring-1 focus:ring-fuchsia-500 sm:text-sm"
            ]
            [ Icon.solidSearch
            , text "Search Direct Messages"
            ]
        , { name = "Person Name"
          , id = "personID"
          , headBubble = { text = "message text goes here.", datetime = "May 3" }
          , avatar = "url for avatar"
          }
            |> List.repeat 20
            |> List.map
                (\{ name, id, headBubble, avatar } ->
                    li [ class "m-0 flex max-w-full border-b border-white border-opacity-10 p-0" ]
                        [ a [ href "#", class "flex-none p-4 pr-0 text-sm" ] [ ringAvatar ]
                        , a [ href "#", class "flex flex-auto flex-col p-4" ]
                            [ h1 [ class "flex gap-2 whitespace-nowrap" ]
                                [ span [ class "font-bold leading-tight" ] [ text name ]
                                , span [ class "leading-tight opacity-60" ] [ text "last event" ]
                                , time [ class "flex-auto text-right text-sm leading-tight opacity-60", datetime headBubble.datetime ] [ text headBubble.datetime ]
                                ]
                            , p [ class "truncate leading-tight opacity-60" ] [ text headBubble.text ]
                            ]
                        ]
                )
            |> ol [ class "relative m-0 flex min-h-full flex-col p-0" ]
        ]


type alias ChatPage =
    { inputs : Dict String (Maybe String) }


chat : Html msg
chat =
    let
        composeMessageText =
            -- state.inputs
            --     |> Dict.get "compose_message"
            --     |> Maybe.withDefault
            "Compose Message"
    in
    article [ class "flex w-full max-w-md flex-shrink-0 snap-center flex-col items-stretch overflow-y-auto overflow-x-hidden" ]
        [ header [ class "sticky top-0 z-10 flex w-full gap-4 bg-black bg-opacity-80 p-4 text-lg backdrop-blur" ]
            [ a [ href "#", class "flex-none" ]
                [ div [ class "icon rounded-full bg-white bg-opacity-20 hover:bg-opacity-80" ] []
                , div [ class "sr-only" ] [ text "back" ]
                ]
            , a [ href "#", class "flex flex-auto items-center gap-2" ]
                [ div [ class "-my-2 -mb-8 text-base" ] [ ringAvatar ]
                , div [ class "-my-2 flex flex-auto flex-col text-sm" ]
                    [ h1 [ class "font-bold leading-tight" ] [ text "Person Name" ]
                    , span [ class "line-clamp-1 text-xs leading-tight opacity-60" ] [ text "Common Events, Common Activities" ]
                    ]
                ]
            , nav [ class "flex flex-none gap-2" ]
                [ a [ href "#", class "icon rounded-full bg-white bg-opacity-20 hover:bg-opacity-80" ] []
                , a [ href "#", class "icon rounded-full bg-white bg-opacity-20 hover:bg-opacity-80" ] []
                ]
            ]
        , List.repeat 50 ()
            |> List.indexedMap
                (\i bubble ->
                    let
                        yourself =
                            modBy 2 i == 0
                    in
                    li
                        [ class "max-w-[80%]"
                        , classList [ ( "self-end", yourself ), ( "self-start", not yourself ) ]
                        ]
                        [ p
                            [ class "rounded-xl bg-gradient-to-b bg-fixed px-4 py-3 leading-snug"
                            , classList
                                [ ( "rounded-br-none from-neutral-700 to-neutral-900", yourself )
                                , ( "rounded-bl-none from-blue-500 to-blue-700", not yourself )
                                ]
                            ]
                            [ text "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque laborum, illo sapiente eos optio doloremque! Corporis quisquam eius debitis provident voluptatibus alias. Soluta, veniam. Sequi quod saepe minima hic!" ]
                        ]
                )
            |> ol [ class "relative flex flex-auto flex-col gap-3 p-2 text-sm leading-tight" ]
        , footer [ class "sticky bottom-0 z-10 flex w-full justify-end bg-black bg-opacity-80 backdrop-blur" ]
            [ menu [ class "flex flex-auto items-stretch gap-2 p-4" ]
                [ a [ href "#", class "flex flex-auto items-center justify-center rounded-lg bg-white bg-opacity-20 hover:bg-opacity-80" ] [ text "+" ]
                , div
                    [ class "relative flex-auto overflow-hidden rounded-lg border border-white border-opacity-40 transition ease-out"
                    , class "w-full max-w-[80%] text-sm focus-within:border-fuchsia-500 focus-within:border-opacity-100 focus:border-opacity-60"
                    ]
                    [ textarea
                        [ class "z-10 resize-none !appearance-none border-0 border-none bg-neutral-900 bg-opacity-10 text-sm outline-none outline-0 transition ease-out"
                        , class "absolute inset-0 m-0 h-full w-full px-3 py-2 focus:bg-opacity-100"

                        -- , onInput (UpdateInput "compose_message")
                        ]
                        [ text composeMessageText ]
                    , div [ class "pointer-events-none min-h-[1em] px-3 py-2 opacity-40" ] [ text composeMessageText ]
                    ]
                , button [ type_ "button", class "flex flex-auto items-center justify-center rounded-lg bg-white bg-opacity-20 hover:bg-opacity-80" ] [ text "send" ]
                ]
            ]
        ]
