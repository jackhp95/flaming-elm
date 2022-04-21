module Util exposing (..)

import Head
import Head.Seo as Seo
import Head.Twitter as Twitter
import Html
import Html.Attributes exposing (href)
import MimeType
import Pages.Url
import Route exposing (Route)
import Url.Builder


logoAppleIcon : Pages.Url.Url
logoAppleIcon =
    Pages.Url.external "/logo.svg"


logoIcon : Pages.Url.Url
logoIcon =
    Pages.Url.external "/logo.svg"


asHref : Route -> Html.Attribute msg
asHref route =
    Url.Builder.absolute (Route.routeToPath route) []
        |> href


head : List Head.Tag
head =
    Head.sitemapLink "/sitemap.xml"
        :: Head.icon [ ( 32, 32 ), ( 16, 16 ) ] (MimeType.OtherImage "svg+xml") logoIcon
        :: Head.appleTouchIcon (Just 160) logoAppleIcon
        :: Seo.website
            { title = "Flamingle Social | Find Events, Make Friends"
            , image =
                { url = logoIcon
                , alt = "Flamingle Logo"
                , dimensions =
                    Just
                        { width = 1024
                        , height = 1024
                        }
                , mimeType = Nothing
                }
            , canonicalUrlOverride = Just "https://www.FlamingleSocial.com"
            , description = "Flamingle is for people who want to keep their pulse on exciting events happening in their town and meet new people."
            , siteName = "Flamingle Social"
            , audio = Nothing
            , video = Nothing
            , locale = Nothing
            , alternateLocales = []
            , twitterCard =
                Twitter.Summary
                    { title = "Flamingle Social"
                    , description = Just "Flamingle is for people who want to keep their pulse on exciting events happening in their town and meet new people."
                    , siteUser = Nothing
                    , image = Nothing
                    , size = Twitter.Regular
                    }
            }
