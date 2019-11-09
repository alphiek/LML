import {colors} from '../Utilities/colors'

export const paymentsCopy = {
  h2: `Payments`,
  fact: [
    {
      h4: `Holding Deposit`,
      p: `We collect a holding deposit from our renters when they indicate to us they would like to place an offer on your property. This holding deposit is then transferred to you once their offer has been formally accepted.`,
      icon: `payment1`
    },

    {
      h4: `Move-in monies`,
      p: `We notify our renters to follow your terms and conditions when it comes to the payment schedule of moving into your property. We will assist in ensuring the move-in monies are paid.`,
      icon: `payment2`
    },
    {
      h4: `Rent`,
      p: `The rent shall be paid as dictated in the tenancy agreement signed by our renters and yourselves, this is usually in the form of a monthly rental payment.`,
      icon: `payment3`
    },
  ],
  color: `${colors.textPrimary}`,
  bgColor: `${colors.white}`,
  divider: `${colors.mint}`,
}
