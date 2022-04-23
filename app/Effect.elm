module Effect exposing (Effect(..), batch, fromCmd, map, none, perform)

import Browser.Navigation
import Http
import Url exposing (Url)


type Effect msg
    = None
    | Cmd (Cmd msg)
    | Batch (List (Effect msg))


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


perform : { fetchRouteData : { body : Maybe { contentType : String, body : String }, path : Maybe String, toMsg : Result Http.Error Url -> userMsg } -> Cmd mappedMsg, fromPageMsg : userMsg -> mappedMsg, key : Browser.Navigation.Key } -> Effect userMsg -> Cmd mappedMsg
perform rec effect =
    case effect of
        None ->
            Cmd.none

        Cmd cmd ->
            Cmd.map rec.fromPageMsg cmd

        Batch list ->
            Cmd.batch (List.map (perform rec) list)
