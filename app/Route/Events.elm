module Route.Events exposing (ActionData, Data, Model, Msg, route)

import Data.SeatGeek as SG exposing (Events)
import DataSource exposing (DataSource, andThen)
import DataSource.Http
import DateFormat as DF
import DateFormat.Relative exposing (relativeTime)
import Head
import Html exposing (..)
import Html.Attributes as Attr exposing (..)
import Json.Decode as Decode
import Maybe.Extra as Maybe
import Pages.PageUrl exposing (PageUrl)
import RouteBuilder exposing (StatelessRoute, StaticPayload)
import Server.Request as Request
import Server.Response as Response exposing (Response)
import Shared
import Site
import String.Extra as String
import Time
import Url.Builder exposing (crossOrigin, string)
import View exposing (View)


type alias Model =
    {}


type alias Msg =
    ()


type alias Data =
    Events


type alias ActionData =
    {}


type alias RouteParams =
    {}


route : StatelessRoute RouteParams Data action
route =
    RouteBuilder.serverRender
        { head = head
        , action = \_ -> Request.succeed (DataSource.fail "PLACEHOLDER ACTION")
        , data = data
        }
        |> RouteBuilder.buildNoState { view = view }


data : RouteParams -> Request.Parser (DataSource (Response Data error))
data routeParams =
    let
        endpoint zip =
            crossOrigin "https://api.seatgeek.com"
                [ "2", "events" ]
                [ string "client_id" "MzUwNDE1NnwxNDgxNjA1ODM2"
                , zip
                    |> Maybe.filter (not << String.isBlank)
                    |> Maybe.withDefault "65203"
                    |> string "postal_code"
                , string "per_page" "300"
                ]
    in
    Request.queryParam "zip"
        |> Request.map
            (\zip ->
                SG.events
                    |> Decode.map Response.render
                    |> DataSource.Http.get (endpoint zip)
            )


head : StaticPayload Data action RouteParams -> List Head.Tag
head static =
    Site.head


view : Maybe PageUrl -> Shared.Model -> StaticPayload Data action RouteParams -> View msg
view maybeUrl sharedModel static =
    let
        location =
            static.data.meta.geolocation.displayName

        layout =
            columnLayout

        gridLayout =
            List.map (eventCard sharedModel >> List.singleton >> li [ class "contents" ])
                >> ol
                    [ class "grid-cols-[repeat(auto-fit,minmax(clamp(140px,18vw,210px),1fr))]"
                    , class "grid gap-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8"
                    ]

        columnLayout =
            List.map (eventCard sharedModel >> List.singleton >> li [ class "break-inside-avoid p-2" ])
                >> ol [ class "columns-2 gap-0 sm:columns-[12rem]" ]
    in
    { title = "Events in " ++ location ++ " | Flamingle"
    , body =
        div [ class "mx-auto flex flex-col gap-2 p-2 sm:gap-4 sm:p-4 md:gap-6 md:p-6 lg:max-w-7xl lg:gap-8 lg:p-8" ]
            [ header [ class "group relative flex max-w-full flex-col p-2 sm:p-4 md:p-6 lg:p-8" ]
                [ h1
                    [ class "mx-4 pt-2 text-2xl transition-all duration-300 ease-out group-focus-within:-translate-y-1 sm:pt-4 md:pt-6 lg:pt-8"
                    , class "animate-move-bg bg-gradient-to-r from-rose-500 via-fuchsia-500 to-rose-500 bg-[length:400%] bg-clip-text text-white group-focus-within:text-transparent"
                    ]
                    [ text "Upcoming Events in "
                    , span [ class "sr-only" ] [ text location ]
                    ]
                , Html.form
                    [ action "/events/"
                    , class "relative flex h-14 w-full max-w-lg text-sm"
                    , class "animate-move-bg bg-gradient-to-r from-rose-500 via-fuchsia-500 to-rose-500 bg-[length:400%]"
                    , class "rounded-md transition-all duration-300 ease-out focus-within:rounded-lg"
                    ]
                    [ label [ for "search", class "sr-only" ] [ text "Search" ]
                    , input
                        [ id "postal-code"
                        , name "zip"
                        , Attr.attribute "autocomplete" "postal-code"
                        , class "absolute inset-0 m-0 max-w-full border-none bg-black p-0 !leading-none outline-none !ring-0 transition-all duration-300 ease-out"
                        , class "block flex-auto text-5xl font-bold text-current placeholder-current focus:placeholder-transparent"
                        , class "rounded-md focus:inset-0.5 focus:bg-neutral-900 focus:px-4 focus:py-3 focus:text-3xl"
                        , placeholder location
                        , type_ "search"
                        ]
                        []

                    -- , button
                    --     [ class "absolute inset-y-0 right-0 font-bold whitespace-nowrap z-10 rounded-full flex items-center p-4"
                    --     , class "opacity-0 pointer-events-none transition-all duration-300 ease-out"
                    --     , class "group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
                    --     , type_ "submit"
                    --     ]
                    --     [ text "Find Events" ]
                    ]
                ]
            , gridLayout static.data.events
            ]
    }


eventCard : Shared.Model -> SG.Event -> Html msg
eventCard { time } event =
    let
        imageList =
            event.performers
                -- remove generic seatgeek default images
                |> List.filterMap
                    (\performer ->
                        Maybe.andThen
                            (\image ->
                                if String.contains "/generic-" image then
                                    Nothing

                                else
                                    Just
                                        (img
                                            [ src image
                                            , alt performer.name
                                            , class "flex-none snap-center object-cover object-center"
                                            , width 280
                                            , height 210
                                            ]
                                            []
                                        )
                            )
                            performer.image
                    )
    in
    a
        [ href <| String.fromInt event.id
        , id <| String.fromInt event.id
        , class "group relative flex flex-col overflow-hidden rounded ring-1 ring-white ring-opacity-10 transition-all hover:ring-opacity-100 focus:ring-2 focus:ring-fuchsia-500 sm:rounded-lg sm:pb-0 sm:ring-opacity-20"
        , classList [ ( "row-span-2", (not << List.isEmpty) imageList ) ]
        ]
        [ div [ class "thin-scrollbar flex snap-x snap-mandatory overflow-x-scroll bg-opacity-20 opacity-90 group-hover:opacity-100" ] imageList
        , div
            [ class "flex flex-1 flex-col space-y-2 p-4"
            ]
            [ h3 [ class "text-sm font-medium opacity-90" ] [ text event.shortTitle ]

            -- , div
            --     [ class "flex -space-x-2 relative z-0 overflow-hidden p-2"
            --     ]
            --     (List.repeat 5
            --         (img
            --             [ class "relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-black ring-opacity-80"
            --             , src "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            --             , alt ""
            --             ]
            --             []
            --         )
            --     )
            , div
                [ class "flex flex-1 flex-col justify-end text-xs"
                ]
                [ p [ class "italic opacity-50" ] [ text event.venue.name ]
                , p [ class "font-medium opacity-70" ]
                    [ output []
                        [ DF.format
                            [ DF.monthNameFull
                            , DF.text " "
                            , DF.dayOfMonthSuffix
                            , DF.text ", "
                            , DF.hourNumber
                            , DF.text ":"
                            , DF.minuteFixed
                            , DF.text " "
                            , DF.amPmLowercase
                            ]
                            Time.utc
                            event.datetimeLocal
                            |> text
                        ]
                    , text " "
                    , output []
                        [ Maybe.unwrap "" (\t -> relativeTime t event.datetimeUTC) time
                            |> text
                        ]
                    ]
                ]
            ]
        ]
