module Site exposing (config, manifest)

import Color
import DataSource exposing (DataSource)
import Head
import Head.Seo as Seo
import Head.Twitter as Twitter
import MimeType
import Pages.Manifest as Manifest
import Pages.Manifest.Category exposing (..)
import Pages.Url
import Path
import SiteConfig exposing (SiteConfig)


config : SiteConfig
config =
    { canonicalUrl = "https://flaminglesocial.com/"
    , head = head
    }


logoIcon =
    Pages.Url.external "/logo.svg"


head : DataSource (List Head.Tag)
head =
    Head.sitemapLink "/sitemap.xml"
        :: Head.icon [ ( 32, 32 ), ( 16, 16 ) ] (MimeType.OtherImage "svg+xml") logoIcon
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
        |> DataSource.succeed


manifest : Manifest.Config
manifest =
    { name = "https://www.FlamingleSocial.com"
    , description = "Flamingle is for people who want to keep their pulse on exciting events happening in their town and meet new people."
    , startUrl = Path.fromString "."
    , icons =
        [ { src = logoIcon
          , sizes =
                [ ( 16, 16 )
                , ( 32, 32 )
                , ( 96, 96 )
                , ( 180, 180 )
                , ( 300, 300 )
                , ( 512, 512 )
                ]
          , mimeType = Just (MimeType.OtherImage "svg+xml")
          , purposes = [ Manifest.IconPurposeAny, Manifest.IconPurposeMaskable ]
          }
        ]
    }
        |> Manifest.init
        |> Manifest.withShortName "Flamingle"
        |> Manifest.withCategories [ lifestyle, entertainment, music, social, sports, travel ]
        |> Manifest.withThemeColor (Color.rgb 244 63 94)
        |> Manifest.withBackgroundColor Color.black
        |> Manifest.withDisplayMode Manifest.Standalone
