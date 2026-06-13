module Route.Auth exposing (ActionData, Data, Model, Msg, route)

import Component.Auth as Auth
import Component.Icon as Icon
import DataSource exposing (DataSource)
import Effect
import Head
import Html exposing (..)
import Html.Attributes exposing (..)
import Pages.Msg
import Pages.PageUrl exposing (PageUrl)
import Pages.Url
import Path
import Route
import RouteBuilder exposing (StatefulRoute, StatelessRoute, StaticPayload)
import Shared
import Site
import Util
import Util.Native
import Util.Native.Entry
import View exposing (View)


type alias Model =
    {}


type Msg
    = NoOp Util.Native.EntryExample


type alias ActionData =
    {}


type alias RouteParams =
    {}


type alias Data =
    { message : String }


route : StatefulRoute RouteParams Data action {} Msg
route =
    RouteBuilder.single
        { head = head
        , data = data
        }
        |> RouteBuilder.buildWithLocalState
            { view = view
            , init =
                \_ _ _ ->
                    let
                        _ =
                            Debug.log "Hello" "World"
                    in
                    ( {}, Effect.none )
            , update =
                \_ _ _ msg _ ->
                    let
                        _ =
                            Debug.log "NoOp"
                    in
                    ( {}, Effect.none )
            , subscriptions = \_ _ _ _ _ -> Sub.none
            }


data : DataSource Data
data =
    DataSource.succeed Data
        |> DataSource.andMap
            (DataSource.succeed "Hello!")


head : StaticPayload Data action RouteParams -> List Head.Tag
head static =
    Site.head


view : Maybe PageUrl -> Shared.Model -> {} -> StaticPayload Data action RouteParams -> View (Pages.Msg.Msg Msg)
view maybeUrl sharedModel {} static =
    { title = "Flamingle | Find Events, Make Friends"
    , body = Html.map Pages.Msg.UserMsg accountPage
    }


accountPage : Html Msg
accountPage =
    div
        [ class "min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"
        ]
        [ div
            [ class "sm:mx-auto sm:w-full sm:max-w-md"
            ]
            [ img
                [ class "mx-auto h-12 w-auto"
                , src <| Pages.Url.toString Util.logoIcon
                , alt "Flamingle Logo"
                ]
                []
            , h2
                [ class "mt-6 text-center text-3xl font-extrabold text-neutral-100"
                ]
                [ text "Sign in to your account" ]
            , p
                [ class "mt-2 text-center text-sm text-neutral-400"
                ]
                [ text " Or "
                , a
                    [ href <| Route.toString Route.Index
                    , class "font-medium text-fuchsia-600 hover:text-fuchsia-500"
                    , class "rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-fuchsia-500"
                    ]
                    [ text "start your 14-day free trial" ]
                ]
            ]
        , div
            [ class "mt-8 sm:mx-auto sm:w-full sm:max-w-md"
            ]
            [ div
                [ Util.Native.onInput
                    (Util.Native.Entry.decodeEntry Util.Native.entryExample)
                    (Debug.log "inline" >> NoOp)
                , class "bg-black py-8 px-4 shadow sm:rounded-lg sm:px-10"
                ]
                Auth.signUpFormContents
            ]
        ]
