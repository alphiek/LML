import { colors } from "../Utilities/colors"

export const contractsCopy = {
  h2: `Contracts`,
  fact: [
    {
      h4: `Is there a split commission?`,
      p: `No, we are wholly retained by our clients and there will be no charge to your agency`,
      icon: "contract1",
    },
    {
      h4: `How do you make your money?`,
      p: `If we are able to successfully find our renters their ideal property, we charge them a percentage of the final rent value once all the contracts are signed. This is a separate charge to the rent for providing our property finding service.`,
      icon: "contract2",
    },
    {
      h4: `Are we on the tenancy agreement?`,
      p: `No, If our renters successfully place an offer and a tenancy agreement is granted, the contract formed shall be between yourselves and them`,
      icon: `contract3`
    },
  ],
  color: `${colors.textPrimary}`,
  bgColor: `${colors.white}`,
  divider: `${colors.lightPeach}`,
}
