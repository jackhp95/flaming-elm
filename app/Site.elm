module Site exposing (config, head)

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
import Util


config : SiteConfig
config =
    { canonicalUrl = "https://FlamingleSocial.com/"
    , head = DataSource.succeed head

    -- , manifest = manifest
    }


head : List Head.Tag
head =
    Util.head
