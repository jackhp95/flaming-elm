module Route.Events exposing (Data, Model, Msg, route)

import Data.SeatGeek as SG exposing (Events)
import DataSource exposing (DataSource)
import DataSource.Http
import DateFormat as DF
import DateFormat.Relative exposing (relativeTime)
import Head
import Html exposing (..)
import Html.Attributes exposing (..)
import Json.Decode as Decode
import Maybe.Extra as Maybe
import Pages.PageUrl exposing (PageUrl)
import RouteBuilder exposing (StatelessRoute, StaticPayload)
import Server.Request as Request
import Server.Response as Response exposing (Response)
import Shared
import Site
import Time
import Url.Builder exposing (crossOrigin, string)
import View exposing (View)


type alias Model =
    {}


type alias Msg =
    ()


type alias Data =
    Events


type alias RouteParams =
    {}


route : StatelessRoute RouteParams Data
route =
    RouteBuilder.serverRender
        { head = head
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
                , Maybe.withDefault "65203" zip
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


head : StaticPayload Data RouteParams -> List Head.Tag
head static =
    Site.head


view : Maybe PageUrl -> Shared.Model -> StaticPayload Data RouteParams -> View Msg
view maybeUrl sharedModel static =
    let
        layout =
            columnLayout

        gridLayout =
            List.map (eventCard sharedModel)
                >> div
                    [ class "grid-cols-[repeat(auto-fit,minmax(clamp(140px,18vw,210px),1fr))]"
                    , class "grid gap-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8"
                    ]

        columnLayout =
            List.map (eventCard sharedModel >> List.singleton >> li [ class "p-2 break-inside-avoid" ])
                >> ol [ class "columns-2 sm:columns-[12rem] gap-0" ]
    in
    { title = "Events in " ++ static.data.meta.geolocation.displayName ++ " | Flamingle"
    , body =
        div
            [ class "max-w-2xl mx-auto px-2 py-5 sm:py-16 sm:px-4 md:py-24 md:px-6 lg:max-w-7xl lg:px-8"
            ]
            [ h2 [ class "sr-only" ] [ text "Events" ]
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
                                            , class "snap-center flex-none object-center object-cover"
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
        , class "group relative focus:ring-2 transition-all sm:pb-0 ring-1 ring-white focus:ring-fuchsia-500 hover:ring-opacity-100 ring-opacity-10 sm:ring-opacity-20 rounded sm:rounded-lg flex flex-col overflow-hidden"
        , classList [ ( "row-span-2", (not << List.isEmpty) imageList ) ]
        ]
        [ div [ class "bg-opacity-20 opacity-90 group-hover:opacity-100 overflow-x-scroll thin-scrollbar flex snap-x snap-mandatory" ] imageList
        , div
            [ class "flex-1 p-4 space-y-2 flex flex-col"
            ]
            [ h3 [ class "font-medium opacity-90 text-sm" ] [ text event.shortTitle ]

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
                [ class "flex-1 flex flex-col justify-end text-xs"
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
