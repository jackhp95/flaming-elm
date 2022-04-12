module ErrorPage exposing (ErrorPage(..), Model, Msg, head, init, internalError, notFound, statusCode, update, view)

import Effect exposing (Effect)
import Head
import Html as Html exposing (..)
import Html.Attributes as Attr exposing (..)
import Html.Events exposing (onClick)
import View exposing (View)


type Msg
    = Increment


type alias Model =
    { count : Int }


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


head : ErrorPage -> List Head.Tag
head errPage =
    []


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
        [ class "min-h-full pt-16 pb-12 flex-auto flex flex-col"
        ]
        [ main_
            [ class "flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
            ]
            [ div
                [ class "flex-shrink-0 flex justify-center"
                ]
                [ a
                    [ href "/"
                    , class "inline-flex"
                    ]
                    [ span [ class "sr-only" ] [ text "Workflow" ]
                    , img
                        [ class "h-24 w-auto"
                        , src "${data.util.emojiDataUri()}"
                        , alt ""
                        ]
                        []
                    ]
                ]
            , div
                [ class "py-16"
                ]
                [ div
                    [ class "text-center"
                    ]
                    [ p [ class "text-sm font-semibold text-fuchsia-600 uppercase tracking-wide" ] [ text "404 error" ]
                    , h1 [ class "mt-2 text-4xl font-extrabold text-neutral-100 tracking-tight sm:text-5xl" ] [ text "Page not found." ]
                    , p [ class "mt-2 text-base text-neutral-500" ] [ text "Sorry, we couldn’t find the page you’re looking for." ]
                    , div [ class "mt-6" ]
                        [ a
                            [ href "/"
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
            [ class "flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
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
