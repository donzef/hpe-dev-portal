import React from 'react';
import { Box, Button, Heading, Text, Anchor } from 'grommet';
import { Previous } from 'grommet-icons';
import { Link } from 'gatsby';
// eslint-disable-next-line max-len
import GrommetThemeWrapper from '../../../components/hackshack/Grommet/GrommetThemeWrapper';
import { Layout } from '../../../components/hackshack';
import { SEO } from '../../../components';

const ParticipationTC = () => {
  return (
    <GrommetThemeWrapper>
      <Layout background="/img/BackgroundImages/generic-background.png">
        <SEO title="HPE Hack Shack Participation Giveaway Terms" />
        <Box align="start" width="xlarge" direction="column">
          <Box align="start">
            <Link to="/hackshack/arcade">
              <Button
                color="white"
                icon={<Previous size="small" />}
                label="Back to Arcade"
              />
            </Link>
            <Heading
              color="text-strong"
              level="1"
              margin={{ bottom: 'none', top: 'none' }}
            >
              HPE Hack Shack Participation Giveaway – HPE Discover 2023
            </Heading>
            <Text color="text-strong" margin={{ bottom: 'large' }}>
              TERMS AND CONDITIONS
            </Text>
          </Box>
          <Text size="xlarge">
            1. <strong>SPONSOR:</strong> The sponsor of this giveaway is Hewlett
            Packard Enterprise Company (“HPE”), 1701 E Mossy Oaks Road, Spring,
            TX 77389.
          </Text>
          <br />
          <Text size="xlarge">
            2. <strong>INTRODUCTION:</strong> HPE invites HPE Discover 2023
            (“Event”) attendees to participate in the HPE Hack Shack
            Participation Giveaway (“Program”) for a chance to win a prize as
            further detailed below (“Prize”), subject to the terms and
            conditions below (“Terms and Conditions”). By participating in the
            Program, participants affirm that they have read, accepted, and
            agree to waive any right to claim any ambiguity or error in these
            Terms and Conditions or the entry itself and agree to be bound by
            these Terms and Conditions and HPE’s decisions, which are final and
            binding in all respects. HPE reserves the right to review, modify,
            extend or discontinue any and/or all aspects of the Program,
            including these Terms and Conditions, at any time without prior
            notice. The Program is subject to federal, state, and local laws and
            regulations and is void where prohibited.
          </Text>
          <br />
          <Text size="xlarge">
            3. <strong>PROGRAM PERIOD:</strong> The Program begins on June 20,
            2023 at 08:00 AM Pacific Time and ends at 3:00 PM Pacific Time on
            June 22, 2023, or when the Program budget has been reached,
            whichever is earlier (the “Program Period”). Entries submitted
            before or after the Program Period will not be eligible. HPE’s
            computer is the official time-keeping device for the Program.
          </Text>
          <br />
          <Text size="xlarge">
            4. <strong>ELIGIBILITY:</strong> NO HPE PRODUCT OR SERVICE PURCHASE
            NECESSARY. A PURCHASE WILL NOT IMPROVE YOUR CHANCES OF WINNING. The
            Program is open only to participants eighteen (18) years of age and
            older who are in person attendees of the Event. Void in Puerto Rico,
            U.S. territories and possessions, and where prohibited by law.
            Employees, contractors, and contingent workers of HPE, its
            subsidiaries, affiliates, their immediate family and household
            members are not eligible. Employees of the following entities are
            ineligible for this promotion: National/federal, state, and local
            government entities, public higher education institutions, and
            private or public K-12 educational institutions and libraries and
            their board members, employees, officers, representatives, agents,
            consultants and independent contractors. HPE shall determine Program
            eligibility in its sole and absolute discretion.
          </Text>
          <br />
          <Text size="xlarge">
            5. <strong>HOW TO ENTER:</strong> By completing one (1) of the
            Activities listed below and submitting an entry during the Program
            Period, participants attending the Event in person may be considered
            eligible for the Prize. LIMIT ONE (1) PRIZE PER PERSON/ENTRY WHILE
            SUPPLIES LAST. The Prize is subject to these Terms and Conditions.
            In order to enter the Program, participants must participate in one
            (1) of the following activities during the Program Period (each, an
            “Activity”):
          </Text>
          <ul>
            <li>Complete one (1) Hack Shack Workshops-on-demand challenge</li>
            <li>Complete the Hack Shack Treasure Hunt</li>
            <li>Attend one Hack Shack Meet-the-Expert session or customer discussion meetup</li>
            <li>
              Attend the Hack Shack celebration evening on Wednesday, June 21
              at 5:30 PM Pacific Time at the Hack Shack zone in the Event show floor 
              and complete the Hack Shack foosball game at the celebration
            </li>
          </ul>
          <Text size="xlarge">
            After completing an Activity, participants must report to the
            designated HPE Activity Captain for the Activity to complete their
            entry and receive the Prize.
          </Text>
          <br />
          <Text size="xlarge">
            6. <strong>PRIZE:</strong> Interested parties who merely complete an
            Activity or submit an entry are not guaranteed a Prize. Eligible
            participants who are awarded a Prize will receive either an
            HPE Developer/Innovate branded t-shirt, or an HPE Developer branded hat
            depending on the Activity completed as outlined below:
          </Text>
          <ul>
            <li>
              One (1) HPE Developer/Innovate branded t-shirt will be awarded for the 
              completion of one (1) of the following Activities (each, a “Shirt Activity”):
              <ul>
                <li>Complete one (1) Hack Shack Workshops-on-demand challenge</li>
                <li>Complete the Hack Shack Treasure Hunt</li>
                <li>Attend a Hack Shack Meet-the-Expert session or customer discussion meetup</li>
              </ul>
            </li>
            <li>
              One (1) HPE Developer branded hat will be awarded for the completion of the
              following Activity (“Hat Activity”):
            </li>
            <ul>
              <li>
                Attend the Hack Shack celebration and complete the Hack Shack
                foosball game at the celebration
              </li>
            </ul>
          </ul>
          <Text size="xlarge">
            Eligible participants may receive both a t-shirt and a hat as part
            of the Program by completing one (1) Shirt Activity and one (1) Hat
            Activity during the Program Period. For the sake of clarity, the
            total Prize each participant may win is one (1) t-shirt, one (1)
            hat. Once a participant has received the total permitted Prize, the participant 
            may continue to participate in the Activities, but will not be eligible to receive
            any further Prize(s). The total estimated retail value of each Prize
            is USD $15.00. The Program budget will not exceed USD $7,350.00 in
            total and will be allocated on a first come first serve basis. HPE
            reserves the right to distribute Prizes until the budget is reached.
            Prizes will be awarded to each participant who completes an eligible
            entry during the Program Period, while supplies last. Odds of
            winning depend on the total number of eligible entries received
            during the Program Period.
          </Text>
          <br />
          <Text size="xlarge">
            There will be no substitution, cash redemption or transfer of
            Prizes, except in HPE’s sole discretion. The Prize may not be used
            for resale or distribution. Taxes and duties, if any, are winner’s
            responsibility. Any Prize details not specified herein will be
            determined by HPE in its sole discretion. HPE reserves the right to
            not fulfill your Prize in the event that the Prize is not certified
            in your country. Due to abuse, we cannot provide Prizes to
            individuals who submitted their entry with Yahoo, Gmail, Hotmail,
            and other email domains not registered to your company. Please speak
            directly to your HPE representative if you have any questions.
          </Text>
          <br />
          <Text size="xlarge">
            7. <strong>DISQUALIFICATION:</strong> HPE reserves the right to
            disqualify any participant and any entries at any time or during any
            phase of the Program for any reason whatsoever at its sole
            discretion. Without limiting the foregoing, HPE reserves the right,
            in its sole discretion, to disqualify any individual it finds to be
            tampering with the operation of the Program or any website related
            to the Program; to be acting in violation of these Terms and
            Conditions; or to be acting in a disruptive manner, or with intent
            to annoy, abuse, threaten or harass any person participating in or
            connected with the Program. Any attempt by you to obtain more than
            the stated number of entries by using multiple or different
            identities, or any other prohibited methods will void your entry and
            you shall be disqualified. Use of any automated system to
            participate is prohibited and will result in disqualification. HPE’s
            server shall be the official time stamp for the purposes of
            determining the validity of any participation in the Program (where
            applicable).
          </Text>
          <br />
          <Text size="xlarge">
            8. <strong>RELEASE AND LIMITATIONS OF LIABILITY:</strong> By
            participating in this Program, to the maximum extent permitted by
            applicable laws, you release and discharge HPE from any and all
            liability resulting from late, lost, delayed, stolen, misdirected,
            unreadable, incorrect, inaccurate, garbled, unintelligible or
            postage due communications, including without limitation, entry and
            Program information, regardless of the method of transmission. By
            participating in the Program, you agree that HPE shall not be liable
            for, and, to the maximum extent permitted by applicable laws, you
            shall release and hold HPE, its affiliates, subsidiaries, licensees,
            officers, directors, agents, representatives and employees
            (collectively, “Released Parties”), harmless from, any and all
            losses, injuries, claims, and/or causes of action arising out of
            participation in the Program, the content of any entries, and/or
            receipt or use of any Prize. You waive the right to claim any
            attorneys’ fees and any damages whatsoever, including, but not
            limited to, punitive, consequential, direct, or indirect damages.
            You also agree that the Released Parties are not responsible or
            liable for any injury or damage to your or third person's computer
            and/or its contents, related to or resulting from any part of the
            Program.
          </Text>
          <br />
          <Text size="xlarge">
            9. <strong>THIRD PARTIES:</strong> For the purposes of this Program,
            HPE cannot guarantee the performance of any third party and to the
            extent permitted by applicable law shall not be liable for any act
            or default by a third party. All third party trademarks are the
            property of their respective owners.
          </Text>
          <br />
          <Text size="xlarge">
            10. <strong>PRIVACY:</strong> By participating in the Program and
            providing HPE with your personal data, you consent to the use of
            your data by HPE for purposes of conducting this Program in
            accordance with these Terms and Conditions and subject to HPE’s
            Privacy Statement, available at{' '}
            <Anchor
              href="https://www.hpe.com/us/en/legal/privacy.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.hpe.com/us/en/legal/privacy.html
            </Anchor>
            .
          </Text>
          <br />
          <Text size="xlarge">
            11. <strong>ENGLISH LANGUAGE:</strong> HPE and the Program
            participants confirm that it is their wish that the Terms and
            Conditions, as well as any other documents relating to the Terms and
            Conditions or the Program, including notices, schedules, exhibits
            and authorizations, have been and shall be drawn up in the English
            language only. HPE et les participants au programme confirment
            qu'ils souhaitent que les conditions générales, ainsi que tout autre
            document relatif aux conditions générales ou au programme, y compris
            les avis, les horaires, les expositions et les autorisations, aient
            été et soient rédigés en la langue anglaise uniquement.
          </Text>
          <br />
          <Text size="xlarge">
            12. <strong>GOVERNING LAW:</strong> The Terms and Conditions shall
            be governed by and construed under the laws of the State of New York
            without regard to conflict of laws principles. Any dispute under the
            Terms and Conditions shall be subject to the non-exclusive
            jurisdiction of the courts of the State of New York. You irrevocably
            waive any objection on the grounds of venue, forum non-conveniens or
            any similar grounds and irrevocably consent to service of process by
            mail or in any other manner permitted by applicable law and consent
            to the jurisdiction of the courts of the State of New York. You
            further hereby waive any right to a trial by jury with respect to
            any lawsuit or judicial proceeding arising or relating to the Terms
            and Conditions.
          </Text>
        </Box>
      </Layout>
    </GrommetThemeWrapper>
  );
};

export default ParticipationTC;
