import React from 'react'
import styled from 'styled-components'
import {
  ExternalLink
} from '../../theme'

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  text-align: center;
  width: 100%;
  height: 120px;
  padding: 24px 50px;
  color: #ffffff;
  font-size: 14px;
  background: ${props => props.theme.bg6};
  @media (min-width: 576px) {
    min-width: 80%;
  }
  @media (max-width: 576px) {
    flex-flow: row wrap;
  }
`

const StyledFooterItem = styled.div`
  width: 16.66%;
  @media (max-width: 576px) {
    width: 33.33%
  }
`

const StyledLink = styled(ExternalLink)`
  color: #ffffff;
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterItem>
        <StyledLink
          target="_blank"
          href={`https://rinkeby.etherscan.io/address/0xe5e7bba3dc29bd3d7afdfdbd40903c74d2549e1c`}
        >
          Bling Finance Contract
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink
          target="_blank"
          href={`https://rinkeby.etherscan.io/address/0xa07ea3542faa728d0452a61d0dd23354dae3dfec`}
        >
          MoneyTree Contract
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://discord.gg/xXtgPPW">
          Discord
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://t.me/blingfinance">
          Telegram
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://twitter.com/bling_finance">
          Twitter
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://github.com/fantasygold">
          Github
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://fantasygold.io">
          FantasyGold Core
        </StyledLink>
      </StyledFooterItem>
    </StyledFooter>
  )
}

export default Footer;
