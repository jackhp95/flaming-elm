module Site exposing (config, head)

import DataSource
import Head
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
