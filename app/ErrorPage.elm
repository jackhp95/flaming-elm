module ErrorPage exposing (ErrorPage(..), Model, Msg, head, init, internalError, notFound, statusCode, update, view)

import Effect exposing (Effect)
import Html exposing (..)
import Html.Attributes exposing (..)
import Route
import Util
import View exposing (View)


type Msg
    = Increment


type alias Model =
    { count : Int }


head =
    Util.head


init : ErrorPage -> ( Model, Effect Msg )
init errPage =
    ( { count = 0 }
    , Effect.none
    )


update : ErrorPage -> Msg -> Model -> ( Model, Effect Msg )
update errPage msg model =
    case msg of
        Increment ->
            ( { model | count = model.count + 1 }, Effect.none )


type ErrorPage
    = NotFound
    | InternalError String


notFound : ErrorPage
notFound =
    NotFound


internalError : String -> ErrorPage
internalError =
    InternalError


view : ErrorPage -> Model -> View Msg
view error model =
    { body = errorPage
    , title = "This is a NotFound Error"
    }


statusCode : ErrorPage -> number
statusCode error =
    case error of
        NotFound ->
            404

        InternalError _ ->
            500


errorPage : Html msg
errorPage =
    div
        [ class "flex min-h-full flex-auto flex-col pb-12 pt-16"
        ]
        [ main_
            [ class "mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8"
            ]
            [ div
                [ class "flex flex-shrink-0 justify-center"
                ]
                [ a
                    [ href <| Route.toString Route.Index
                    , class "inline-flex"
                    ]
                    [ span [ class "sr-only" ] [ text "Flamingle" ]
                    , text "🦩"
                    ]
                ]
            , div
                [ class "py-16"
                ]
                [ div
                    [ class "text-center"
                    ]
                    [ p [ class "text-sm font-semibold uppercase tracking-wide text-fuchsia-600" ] [ text "404 error" ]
                    , h1 [ class "mt-2 text-4xl font-extrabold tracking-tight text-neutral-100 sm:text-5xl" ] [ text "Page not found." ]
                    , p [ class "mt-2 text-base text-neutral-500" ] [ text "Sorry, we couldn’t find the page you’re looking for." ]
                    , div [ class "mt-6" ]
                        [ a
                            [ href <| Route.toString Route.Index
                            , class "text-base font-medium text-fuchsia-600 hover:text-fuchsia-500"
                            ]
                            [ text "Go back home"
                            , span
                                [ attribute "aria-hidden" "true"
                                ]
                                [ text "→" ]
                            ]
                        ]
                    ]
                ]
            ]
        , footer
            [ class "mx-auto w-full max-w-7xl flex-shrink-0 px-4 sm:px-6 lg:px-8"
            ]
            [ nav
                [ class "flex justify-center space-x-4"
                ]
                [ a
                    [ href "mailto:flaminglesocial.com@gmail.com"
                    , class "text-sm font-medium text-neutral-500 hover:text-neutral-400"
                    ]
                    [ text "Email Support" ]
                , span
                    [ class "inline-block border-l border-neutral-700"
                    , attribute "aria-hidden" "true"
                    ]
                    []
                , a
                    [ href "https://www.isitdownrightnow.com/flaminglesocial.com.html"
                    , class "text-sm font-medium text-neutral-500 hover:text-neutral-400"
                    ]
                    [ text "Status" ]
                , span
                    [ class "inline-block border-l border-neutral-700"
                    , attribute "aria-hidden" "true"
                    ]
                    []
                , a
                    [ href "https://twitter.com/FlamingleSocial"
                    , class "text-sm font-medium text-neutral-500 hover:text-neutral-400"
                    ]
                    [ text "Twitter" ]
                ]
            ]
        ]
