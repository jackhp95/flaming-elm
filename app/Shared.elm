module Shared exposing (Data, Model, Msg(..), SharedMsg(..), template)

import DataSource
import Effect exposing (Effect)
import Html exposing (..)
import Pages.Flags
import Pages.PageUrl exposing (PageUrl)
import Path exposing (Path)
import Route exposing (Route)
import SharedTemplate exposing (SharedTemplate)
import View exposing (View)


template : SharedTemplate Msg Model Data msg
template =
    { init = init
    , update = update
    , view = view
    , data = data
    , subscriptions = subscriptions
    , onPageChange = Nothing
    }


type Msg
    = SharedMsg SharedMsg


type alias Data =
    ()


type SharedMsg
    = NoOp


type alias Model =
    { showMenu : Bool }


init :
    Pages.Flags.Flags
    ->
        Maybe
            { path :
                { path : Path
                , query : Maybe String
                , fragment : Maybe String
                }
            , metadata : route
            , pageUrl : Maybe PageUrl
            }
    -> ( Model, Effect Msg )
init flags maybePagePath =
    ( { showMenu = False }
    , Effect.none
    )


update : Msg -> Model -> ( Model, Effect Msg )
update msg model =
    case msg of
        SharedMsg _ ->
            ( model, Effect.none )


subscriptions : Path -> Model -> Sub Msg
subscriptions _ _ =
    Sub.none


data : DataSource.DataSource Data
data =
    DataSource.succeed ()


view : Data -> { path : Path, route : Maybe Route } -> Model -> (Msg -> msg) -> View msg -> { body : Html msg, title : String }
view sharedData page model toMsg pageView =
    { body = View.pageLayout pageView.body
    , title = pageView.title
    }
