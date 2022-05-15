module Effect exposing (Effect(..), batch, fromCmd, map, none, perform)

import Browser.Navigation
import Http
import Pages.Fetcher
import Url exposing (Url)


type Effect msg
    = None
    | Cmd (Cmd msg)
    | Batch (List (Effect msg))
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

        SubmitFetcher fetcher ->
            fetcher
                |> Pages.Fetcher.map fn
                |> SubmitFetcher


perform :
    { fetchRouteData :
        { body : Maybe { contentType : String, body : String }
        , path : Maybe String
        , toMsg : Result Http.Error Url -> userMsg
        }
        -> Cmd mappedMsg
    , submit :
        { values : List ( String, String )
        , encType : Maybe String
        , method : Maybe String
        , path : Maybe String
        , toMsg : Result Http.Error Url -> userMsg
        }
        -> Cmd mappedMsg
    , runFetcher : Pages.Fetcher.Fetcher userMsg -> Cmd mappedMsg
    , fromPageMsg : userMsg -> mappedMsg
    , key : Browser.Navigation.Key
    }
    -> Effect userMsg
    -> Cmd mappedMsg
perform ({ fromPageMsg, key } as helpers) effect =
    case effect of
        None ->
            Cmd.none

        Cmd cmd ->
            Cmd.map fromPageMsg cmd

        Batch list ->
            Cmd.batch (List.map (perform helpers) list)

        SubmitFetcher record ->
            helpers.runFetcher record
