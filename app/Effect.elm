module Effect exposing (Effect(..), batch, fromCmd, map, none, perform)

import Browser.Navigation
import FormDecoder
import Http
import Json.Decode as Decode
import Pages.Fetcher
import Url exposing (Url)


type Effect msg
    = None
    | Cmd (Cmd msg)
    | Batch (List (Effect msg))
    | FetchRouteData
        { data : Maybe FormDecoder.FormData
        , toMsg : Result Http.Error Url -> msg
        }
    | Submit
        { values : FormDecoder.FormData
        , toMsg : Result Http.Error Url -> msg
        }
    | SubmitFetcher (Pages.Fetcher.Fetcher msg)



none : Effect msg
none =
    None


batch : List (Effect msg) -> Effect msg
batch =
    Batch


fromCmd : Cmd msg -> Effect msg
fromCmd =
    Cmd


map : (a -> b) -> Effect a -> Effect b
map fn effect =
    case effect of
        None ->
            None

        Cmd cmd ->
            Cmd (Cmd.map fn cmd)

        Batch list ->
            Batch (List.map (map fn) list)

        FetchRouteData fetchInfo ->
            FetchRouteData
                { data = fetchInfo.data
                , toMsg = fetchInfo.toMsg >> fn
                }

        Submit fetchInfo ->
            Submit
                { values = fetchInfo.values
                , toMsg = fetchInfo.toMsg >> fn
                }

        SubmitFetcher fetcher ->
            fetcher
                |> Pages.Fetcher.map fn
                |> SubmitFetcher


perform :
    { fetchRouteData :
        { data : Maybe FormDecoder.FormData
        , toMsg : Result Http.Error Url -> pageMsg
        }
        -> Cmd msg
    , submit :
        { values : FormDecoder.FormData
        , toMsg : Result Http.Error Url -> pageMsg
        }
        -> Cmd msg
    , runFetcher :
        Pages.Fetcher.Fetcher pageMsg
        -> Cmd msg
    , fromPageMsg : pageMsg -> msg
    , key : Browser.Navigation.Key
    }
    -> Effect pageMsg
    -> Cmd msg
perform ({ fromPageMsg, key } as helpers) effect =
    case effect of
        None ->
            Cmd.none

        Cmd cmd ->
            Cmd.map fromPageMsg cmd

        Batch list ->
            Cmd.batch (List.map (perform helpers) list)

        FetchRouteData fetchInfo ->
            helpers.fetchRouteData
                fetchInfo

        Submit record ->
            helpers.submit record

        SubmitFetcher record ->
            helpers.runFetcher record
