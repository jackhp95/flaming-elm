module Route.Events.Slug_ exposing (Data, Model, Msg, route)

import Component.Icon as Icon
import Data.SeatGeek as SG exposing (Event)
import DataSource exposing (DataSource)
import DataSource.Http
import DateFormat as DF
import DateFormat.Relative exposing (relativeTime)
import Head
import Head.Seo as Seo
import Html as Html exposing (..)
import Html.Attributes as Attr exposing (..)
import Json.Decode as Decode exposing (Decoder)
import Pages.PageUrl exposing (PageUrl)
import Pages.Url
import RouteBuilder exposing (StatelessRoute, StaticPayload)
import Server.Request as Request
import Server.Response as Response exposing (Response)
import Shared
import Time
import Url.Builder exposing (crossOrigin, string)
import View exposing (View)


type alias Model =
    {}


type alias Msg =
    ()


type alias Data =
    Event


type alias RouteParams =
    { slug : String }


route : StatelessRoute RouteParams Data
route =
    RouteBuilder.serverRender
        { head = head
        , data = data
        }
        |> RouteBuilder.buildNoState { view = view }


data : RouteParams -> Request.Parser (DataSource (Response Data error))
data { slug } =
    let
        endpoint =
            crossOrigin "https://api.seatgeek.com" [ "2", "events", slug ] [ string "client_id" "MzUwNDE1NnwxNDgxNjA1ODM2" ]
    in
    SG.event
        |> Decode.map Response.render
        |> DataSource.Http.get endpoint
        |> Request.succeed


head :
    StaticPayload Data RouteParams
    -> List Head.Tag
head static =
    Seo.summary
        { canonicalUrlOverride = Nothing
        , siteName = "elm-pages"
        , image =
            { url = Pages.Url.external "TODO"
            , alt = "elm-pages logo"
            , dimensions = Nothing
            , mimeType = Nothing
            }
        , description = "TODO"
        , locale = Nothing
        , title = "TODO title" -- metadata.title -- TODO
        }
        |> Seo.website


view :
    Maybe PageUrl
    -> Shared.Model
    -> StaticPayload Data RouteParams
    -> View Msg
view maybeUrl sharedModel static =
    { title = static.data.shortTitle ++ " | Flamingle"
    , body = eventPage static.data
    }


eventPage event =
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
                                , class "font-medium opacity-50 hover:opacity-90"
                                ]
                                [ text <| SG.nameEnumAsString item.name ]
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
                            [ relativeTime event.datetimeLocal event.datetimeUTC
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
                    |> List.map
                        (\performer ->
                            img
                                [ src performer.image
                                , alt performer.name
                                , class "w-full h-full snap-center flex-none object-center object-cover"
                                ]
                                []
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
                                    |> Maybe.map (.name >> SG.nameEnumAsString)
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
                                                , img
                                                    [ src performer.image
                                                    , alt ""
                                                    , class "h-full w-16 aspect-square object-cover object-center"
                                                    ]
                                                    []
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
                    , div [ class "mt-4" ]
                        [ a
                            [ href "#"
                            , class "group inline-flex text-sm opacity-50 hover:opacity-70"
                            ]
                            [ span [] [ text "What size should I buy?" ]
                            , Icon.solidQuestionMarkCircle
                            ]
                        ]
                    , div [ class "mt-10" ]
                        [ a
                            [ href event.url
                            , class "w-full bg-white border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-neutral-900 hover:bg-opacity-80 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-fuchsia-500"
                            ]
                            [ text "Buy Tickets" ]
                        ]
                    , div [ class "mt-6 text-center" ]
                        [ a
                            [ href "#"
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
