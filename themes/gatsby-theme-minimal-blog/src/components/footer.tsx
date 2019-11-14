/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Flex } from "@theme-ui/components"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <Flex
      as="footer"
      sx={{
        variant: `dividers.top`,
        justifyContent: `space-between`,
        mt: [5, 6, 6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
      }}
    >
      <Flex>
        <div>
          &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
        </div>
      </Flex>
      <div>
        <Styled.a href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog">
          Theme
        </Styled.a>
        {` `}
        by
        {` `}
        <Styled.a href="https://www.lekoarts.de/en">LekoArts</Styled.a>
      </div>
    </Flex>
  )
}

export default Footer