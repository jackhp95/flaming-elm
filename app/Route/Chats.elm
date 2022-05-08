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
        article [ class "snap-both snap-mandatory flex max-w-full overflow-x-auto max-h-[calc(100vh-4rem)] pt-px items-stretch relative" ]
            [ chats
            , chat
            ]
    }


ringAvatar : Html msg
ringAvatar =
    div [ class "hover:bg-gradient-to-t bg-gradient-to-tl transition from-rose-500 to-fuchsia-500 aspect-square w-12 h-12 rounded-full flex items-center justify-center hover:scale-100 scale-105 transition ease-out ring ring-black" ]
        [ div
            [ class "bg-neutral-700 rounded-full hover:ring ring-black aspect-square scale-90 ring-1 transition ease-out hover:scale-75 w-12 h-12" ]
            [ img [ src "", alt "" ] [] ]
        ]


chats : Html msg
chats =
    article [ class "snap-center overflow-y-auto flex-shrink-0 flex-auto w-full max-w-md flex flex-col items-stretch relative" ]
        [ header [ class "z-10 bg-black bg-opacity-80 backdrop-blur sticky top-0 w-full p-4 flex text-lg font-bold justify-between" ]
            [ h1 [ class "leading-none" ] [ text "Inbox" ]
            , nav [ class "flex gap-2" ]
                [ a [ href "#", class "bg-white bg-opacity-20 hover:bg-opacity-80 rounded-full aspect-square icon" ] []
                , a [ href "#", class "bg-white bg-opacity-20 hover:bg-opacity-80 rounded-full aspect-square icon" ] []
                ]
            ]
        , a
            [ href "#"
            , class "flex mx-4 my-2 gap-2 px-4 py-3 border border-opacity-30 border-white rounded-md leading-5 bg-neutral-900 bg-opacity-10 opacity-80"
            , class "focus:bg-opacity-100 placeholder-neutral-500 focus:placeholder-neutral-400 focus:ring-1 focus:ring-fuchsia-500 focus:border-fuchsia-500 sm:text-sm"
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
                    li [ class "max-w-full m-0 p-0 flex border-b border-opacity-10 border-white" ]
                        [ a [ href "#", class "flex-none p-4 pr-0" ] [ ringAvatar ]
                        , a [ href "#", class "p-4 flex-auto flex flex-col" ]
                            [ h1 [ class "flex gap-2 whitespace-nowrap" ]
                                [ span [ class "leading-tight font-bold" ] [ text name ]
                                , span [ class "leading-tight opacity-60" ] [ text "last event" ]
                                , time [ class "leading-tight flex-auto text-right opacity-60", datetime headBubble.datetime ] [ text headBubble.datetime ]
                                ]
                            , p [ class "leading-tight truncate opacity-60" ] [ text headBubble.text ]
                            ]
                        ]
                )
            |> ol [ class "min-h-full flex flex-col p-0 m-0 relative" ]
        ]


chat : Html msg
chat =
    article [ class "snap-center overflow-y-auto flex-shrink-0 w-full max-w-md flex flex-col items-stretch" ]
        [ header [ class "z-10 bg-black bg-opacity-80 backdrop-blur sticky gap-4 top-0 w-full p-4 flex text-lg" ]
            [ a [ href "#" ]
                [ div [ class "bg-white bg-opacity-20 hover:bg-opacity-80 rounded-full aspect-square icon" ] []
                , div [ class "sr-only" ] [ text "back" ]
                ]
            , a [ href "#", class "flex-auto flex gap-2 items-center" ]
                [ div [ class "-my-2 -mb-8" ] [ ringAvatar ]
                , div [ class "text-sm flex flex-col -my-2" ]
                    [ h1 [ class "leading-tight font-bold" ] [ text "Person Name" ]
                    , span [ class "leading-tight opacity-60 text-xs" ] [ text "Common Events, Common Activities" ]
                    ]
                ]
            , nav [ class "flex gap-2" ]
                [ a [ href "#", class "bg-white bg-opacity-20 hover:bg-opacity-80 rounded-full aspect-square icon" ] []
                , a [ href "#", class "bg-white bg-opacity-20 hover:bg-opacity-80 rounded-full aspect-square icon" ] []
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
                        [ class "max-w-[80%] px-4 py-3 rounded-xl bg-gradient-to-b bg-fixed leading-snug"
                        , classList
                            [ ( "from-neutral-700 to-neutral-900 self-end rounded-br-none", yourself )
                            , ( "from-blue-500 to-blue-700 self-start rounded-bl-none", not yourself )
                            ]
                        ]
                        [ text "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque laborum, illo sapiente eos optio doloremque! Corporis quisquam eius debitis provident voluptatibus alias. Soluta, veniam. Sequi quod saepe minima hic!" ]
                )
            |> ol [ class "flex-auto flex flex-col gap-3 p-2 relative text-sm leading-tight" ]
        , footer [ class "z-10 sticky bottom-0 w-full bg-black bg-opacity-80 backdrop-blur flex justify-end" ]
            [ div [ class "absolute -top-0 w-full pointer-events-none flex justify-center" ]
                [ div [ class "text-white text-2xl leading-none translate-y-[-0.5em]" ] [ text "..." ] ]
            , textarea [ class "min-h-[4.75rem] max-h-[50vh] w-[calc(50%+0.5rem)] rotate-180 opacity-0", readonly True ] []
            , menu [ class "absolute inset-4 gap-4 flex" ]
                [ div
                    [ class "flex-auto rounded-lg overflow-hidden border border-opacity-40 border-white focus-within:border-opacity-100 focus-within:border-fuchsia-500 relative transition ease-out"
                    , class "focus:border-opacity-60"
                    ]
                    [ textarea
                        [ class "resize-none outline-none !appearance-none border-none border-0 outline-0 bg-neutral-900 transition ease-out bg-opacity-10"
                        , class "h-full w-full focus:bg-opacity-100"
                        ]
                        []
                    ]
                ]
            ]
        ]
