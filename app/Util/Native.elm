module Util.Native exposing (..)

import Html exposing (Attribute)
import Html.Events as Events exposing (custom)
import Json.Decode as JD
import Util.Native.Entry as Entry exposing (..)
import Util.Native.Form as Form exposing (..)
import Util.Native.Internal as Internal exposing (..)
import Util.Native.Window as Window exposing (..)


type alias EntryExample =
    { name : String
    , value : String
    }


entryExample : Data Entry EntryExample
entryExample =
    succeed EntryExample
        |> Entry.name
        |> Entry.value


type alias FormExample =
    { name : String
    , action : String
    , method : String
    }


formExample : Data Form FormExample
formExample =
    succeed FormExample
        |> Form.name
        |> Form.action
        |> Form.method


type alias WindowExample =
    { onLine : Bool
    , userAgent : String
    , performance : Performance
    }


windowExample : Data Window WindowExample
windowExample =
    succeed WindowExample
        |> Window.onLine
        |> Window.userAgent
        |> Window.performance



-- --------- --
-- Listeners --
-- --------- --
-- Custom


on : String -> Node native a -> (a -> msg) -> Attribute msg
on event (Node decoder) msg =
    decoder
        |> JD.map
            (\result ->
                { message = msg result
                , stopPropagation = True
                , preventDefault = True
                }
            )
        |> Events.custom event



-- Entry


onInput : Node native a -> (a -> msg) -> Attribute msg
onInput =
    on "input"


onChange : Node native a -> (a -> msg) -> Attribute msg
onChange =
    on "change"



-- Form


onSubmit : Node native a -> (a -> msg) -> Attribute msg
onSubmit =
    on "submit"


onReset : Node native a -> (a -> msg) -> Attribute msg
onReset =
    on "reset"



-- Focus


onFocus : Node native a -> (a -> msg) -> Attribute msg
onFocus =
    on "focus"


onBlur : Node native a -> (a -> msg) -> Attribute msg
onBlur =
    on "blur"
