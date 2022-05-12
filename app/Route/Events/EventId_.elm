module Route.Events.EventId_ exposing (Data, Model, Msg, ActionData, route)

import Component.Icon as Icon
import Data.SeatGeek as SG exposing (Event)
import DataSource exposing (DataSource)
import DataSource.Http
import DateFormat as DF
import DateFormat.Relative exposing (relativeTime)
import Dict
import Head
import Html exposing (..)
import Html.Attributes exposing (..)
import Json.Decode as Decode
import Maybe.Extra as Maybe
import Pages.PageUrl exposing (PageUrl)
import Route
import RouteBuilder exposing (StatelessRoute, StaticPayload)
import Server.Request as Request
import Server.Response as Response exposing (Response)
import Shared
import Site
import Time
import Url.Builder exposing (crossOrigin, string)
import Util
import View exposing (View)


type alias Model =
    {}


type alias Msg =
    ()

type alias ActionData =
    {}

type alias Data =
    Event


type alias RouteParams =
    { eventId : String }


route : StatelessRoute RouteParams Data action
route =
    RouteBuilder.serverRender
        { head = head
        , action = \_ -> Request.succeed (DataSource.fail "PLACEHOLDER ACTION")
        , data = data
        }
        |> RouteBuilder.buildNoState { view = view }


data : RouteParams -> Request.Parser (DataSource (Response Data error))
data { eventId } =
    let
        endpoint =
            crossOrigin "https://api.seatgeek.com" [ "2", "events", eventId ] [ string "client_id" "MzUwNDE1NnwxNDgxNjA1ODM2" ]
    in
    SG.event
        |> Decode.map Response.render
        |> DataSource.Http.get endpoint
        |> Request.succeed


head :
    StaticPayload Data action RouteParams
    -> List Head.Tag
head static =
    Site.head


view :
    Maybe PageUrl
    -> Shared.Model
    -> StaticPayload Data action RouteParams
    -> View Msg
view maybeUrl sharedModel static =
    { title = static.data.shortTitle ++ " | Flamingle"
    , body = eventPage sharedModel static.data
    }


eventPage : Shared.Model -> SG.Event -> Html msg
eventPage { time, zone } event =
    div
        [ class "container mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8"
        ]
        [ {- Event details -}
          div
            [ class "lg:max-w-lg lg:self-end"
            ]
            [ nav
                [ attribute "aria-label" "Breadcrumb"
                , class "flex gap-2"
                ]
                (event.taxonomies
                    |> List.map
                        (\item ->
                            a
                                [ href <| String.fromInt item.id
                                , class "font-medium opacity-50 hover:opacity-90 text-xs tracking-widest"
                                ]
                                [ item.name |> (\(SG.Up name) -> text name) ]
                        )
                    |> List.intersperse Icon.breadcrumbSlash
                )
            , div
                [ class "mt-4"
                ]
                [ h1
                    [ class "text-3xl font-extrabold tracking-tight opacity-90 sm:text-4xl"
                    ]
                    [ text event.shortTitle ]
                ]
            , section
                [ attribute "aria-labelledby" "information-heading"
                , class "mt-4"
                ]
                [ h2
                    [ id "information-heading"
                    , class "sr-only"
                    ]
                    [ text "Event information" ]
                , div
                    [ class "flex items-center"
                    ]
                    [ p [ class "text-lg opacity-90 sm:text-xl" ]
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
                    , div [ class "ml-4 pl-4 border-l border-gray-300" ]
                        [ p
                            [ class "ml-2 text-sm opacity-50"
                            ]
                            [ Maybe.map relativeTime time
                                |> Maybe.unwrap "" (\fn -> fn event.datetimeUTC)
                                |> text
                            ]
                        ]
                    ]
                , div
                    [ class "mt-4 space-y-6"
                    ]
                    [ p [ class "text-base opacity-50" ] [ text event.description ]
                    ]
                , div
                    [ class "mt-6 flex items-center"
                    ]
                    [ Icon.solidCheck
                    , p [ class "ml-2 text-sm opacity-50" ] [ text "In stock and ready to ship" ]
                    ]
                ]
            ]
        , {- Event image -}
          div
            [ class "mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center"
            ]
            [ div [ class "aspect-w-1 aspect-h-1 rounded-lg flex overflow-auto snap-x snap-mandatory" ]
                (event.performers
                    |> List.filterMap
                        (\performer ->
                            Maybe.map
                                (\image ->
                                    img
                                        [ src image
                                        , alt performer.name
                                        , class "w-full h-full snap-center flex-none object-center object-cover"
                                        ]
                                        []
                                )
                                performer.image
                        )
                )
            ]
        , {- Event form -}
          div
            [ class "mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start"
            ]
            [ section
                [ attribute "aria-labelledby" "options-heading"
                ]
                [ h2
                    [ id "options-heading"
                    , class "sr-only"
                    ]
                    [ text "Event options" ]
                , Html.form []
                    [ div [ class "sm:flex sm:justify-between" ]
                        [ {- Size selector -}
                          fieldset []
                            [ legend
                                [ class "block text-sm font-medium opacity-70"
                                ]
                                [ event.taxonomies
                                    |> List.head
                                    |> Maybe.map (.name >> SG.upperEnumToString)
                                    |> Maybe.withDefault "Performers"
                                    |> text
                                ]
                            , div [ class "mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2" ]
                                (event.performers
                                    |> List.map
                                        (\performer ->
                                            label
                                                [ class "relative flex border border-white border-opacity-30 overflow-hidden rounded-lg cursor-pointer"
                                                , for <| String.fromInt performer.id
                                                ]
                                                [ input
                                                    [ type_ "radio"
                                                    , name "size-choice"
                                                    , value <| String.fromInt performer.id
                                                    , class "sr-only"
                                                    , attribute "aria-labelledby" "size-choice-0-label"
                                                    , attribute "aria-describedby" "size-choice-0-description"
                                                    ]
                                                    []
                                                , Maybe.unwrap (text "")
                                                    (\image ->
                                                        img
                                                            [ src image
                                                            , alt ""
                                                            , class "h-full w-16 aspect-square object-cover object-center"
                                                            ]
                                                            []
                                                    )
                                                    performer.image
                                                , div
                                                    [ class "p-4"
                                                    ]
                                                    [ p
                                                        [ id "size-choice-0-label"
                                                        , class "text-base font-medium opacity-90"
                                                        ]
                                                        [ text performer.shortName ]
                                                    , p
                                                        [ id "size-choice-0-description"
                                                        , class "mt-1 text-sm opacity-50"
                                                        ]
                                                        [ text performer.name ]
                                                    ]
                                                ]
                                        )
                                )
                            ]
                        ]
                    , [ ( "eventType", SG.upperEnumToString event.eventType )
                      , ( "id", String.fromInt event.id )

                      --   , ( "datetimeUTC", event.datetimeUTC )
                      --   , ( "venue", event.venue )
                      --   , ( "datetimeTbd", event.datetimeTbd )
                      --   , ( "performers", event.performers )
                      --   , ( "isOpen", event.isOpen )
                      --   , ( "links", event.links )
                      --   , ( "datetimeLocal", event.datetimeLocal )
                      --   , ( "timeTbd", event.timeTbd )
                      --   , ( "shortTitle", event.shortTitle )
                      --   , ( "visibleUntilUTC", event.visibleUntilUTC )
                      --   , ( "stats", event.stats )
                      --   , ( "taxonomies", event.taxonomies )
                      --   , ( "url", event.url )
                      --   , ( "score", event.score )
                      --   , ( "announceDate", event.announceDate )
                      --   , ( "createdAt", event.createdAt )
                      --   , ( "dateTbd", event.dateTbd )
                      --   , ( "title", event.title )
                      --   , ( "popularity", event.popularity )
                      --   , ( "description", event.description )
                      --   , ( "status", event.status )
                      --   , ( "accessMethod", event.accessMethod )
                      --   , ( "eventPromotion", event.eventPromotion )
                      --   , ( "announcements", event.announcements )
                      --   , ( "conditional", event.conditional )
                      --   , ( "enddatetimeUTC", event.enddatetimeUTC )
                      --   , ( "themes", event.themes )
                      --   , ( "domainInformation", event.domainInformation )
                      --   , ( "generalAdmission", event.generalAdmission )
                      ]
                        |> List.map (\( t, d ) -> div [] [ dt [] [ text t ], dd [] [ text d ] ])
                        |> dl [ class "mt-4" ]
                    , div [ class "mt-10" ]
                        [ a
                            [ href event.url
                            , class "w-full bg-white border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-neutral-900 hover:bg-opacity-80 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-fuchsia-500"
                            ]
                            [ text "Buy Tickets" ]
                        ]
                    , div [ class "mt-6 text-center" ]
                        [ a
                            [ Util.asHref Route.Index
                            , class "group inline-flex text-base font-medium"
                            ]
                            [ Icon.outlineShieldCheck
                            , span
                                [ class "opacity-50 hover:opacity-70"
                                ]
                                [ text "Lifetime Guarantee" ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
