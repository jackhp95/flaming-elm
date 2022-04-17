module Route.Events exposing (Data, Model, Msg, route)

import Component.Icon as Icon
import Data.SeatGeek as SG exposing (Events)
import DataSource exposing (DataSource)
import DataSource.Http
import DateFormat as DF
import DateFormat.Relative exposing (relativeTime)
import ErrorPage exposing (ErrorPage)
import Head
import Head.Seo as Seo
import Html as Html exposing (..)
import Html.Attributes as Attr exposing (..)
import Json.Decode as Decode exposing (Decoder)
import Maybe.Extra as Maybe
import Pages.PageUrl exposing (PageUrl)
import Pages.Url
import RouteBuilder exposing (StatefulRoute, StatelessRoute, StaticPayload)
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
        endpoint =
            crossOrigin "https://api.seatgeek.com"
                [ "2", "events" ]
                [ string "client_id" "MzUwNDE1NnwxNDgxNjA1ODM2"
                , string "postal_code" "65203"
                , string "per_page" "30"
                ]
    in
    SG.events
        |> Decode.map Response.render
        |> DataSource.Http.get endpoint
        |> Request.succeed


head : StaticPayload Data RouteParams -> List Head.Tag
head static =
    Site.head


view : Maybe PageUrl -> Shared.Model -> StaticPayload Data RouteParams -> View Msg
view maybeUrl sharedModel static =
    { title = "Events in " ++ static.data.meta.geolocation.displayName ++ " | Flamingle"
    , body =
        div
            [ class "max-w-2xl mx-auto sm:py-16 sm:px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
            ]
            [ h2 [ class "sr-only" ] [ text "Events" ]
            , static.data.events
                |> List.map eventCard
                |> div [ class "grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8" ]
            ]
    }


eventCard : SG.Event -> Html msg
eventCard event =
    let
        imageList =
            event.performers
                -- remove generic seatgeek default images
                |> List.filter ((\{ image } -> String.contains "/generic-" image) >> not)
                |> List.map
                    (\performer ->
                        img
                            [ src performer.image
                            , alt performer.name
                            , class "snap-center flex-none w-full h-full object-center object-cover"
                            ]
                            []
                    )
    in
    a
        [ href <| String.fromInt event.id
        , id <| String.fromInt event.id
        , class "group relative focus:ring-2 transition-all pb-6 sm:pb-0 ring-1 ring-white focus:ring-fuchsia-500 hover:ring-opacity-100 ring-opacity-10 sm:ring-opacity-20 sm:rounded-lg flex flex-col overflow-hidden"
        , classList [ ( "row-span-3", (not << List.isEmpty) imageList ) ]
        ]
        [ div [ class "bg-opacity-20 opacity-90 group-hover:opacity-100 overflow-x-scroll thin-scrollbar flex snap-x snap-mandatory" ] imageList
        , div
            [ class "flex-1 p-4 space-y-2 flex flex-col"
            ]
            [ h3 [ class "font-medium opacity-90" ] [ text event.shortTitle ]

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
                [ class "flex-1 flex flex-col justify-end"
                ]
                [ p [ class "text-sm italic opacity-50" ] [ text event.venue.name ]
                , p [ class "text-sm font-medium opacity-70" ]
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
                        [ relativeTime event.datetimeLocal event.datetimeUTC
                            |> text
                        ]
                    ]
                ]
            ]
        ]
