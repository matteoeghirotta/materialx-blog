/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import SectionWrapper from './section-wrapper'
import SectionHeader from './section-header'

const ScientificPublications = () => (
  <SectionWrapper id="publications">
    <SectionHeader>Scientific publications</SectionHeader>
    <div
      sx={{
        maxWidth: 'maxContentWidth',
        mt: 5,
        mx: 'auto'
      }}
    >
      <Styled.p>
        <Styled.a href="https://doi.org/10.1039/c9cp04120f">
          1. MOLC. A reversible coarse grained approach using
          anisotropic beads for the modelling of organic functional
          materials (2019).
        </Styled.a>
      </Styled.p>

      <Styled.p>
        <Styled.a href="https://doi.org/10.1021/acs.jpclett.0c01793">
          2. Design Rules to Maximize Charge-Carrier Mobility along
          Conjugated Polymer Chains (2020).
        </Styled.a>
      </Styled.p>
      <Styled.p>
        3. Moltemplate: A Tool for Ultra-Coarse-Grained Modeling of
        Complex Biological Matter and Soft Condensed Matter Physics
        (2020, Journal of Molecular Biology).
      </Styled.p>
      <Styled.p>
        4. Peptoids as Chiral Stationary Phase for Liquid
        Chromatography: Insights from Molecular Dynamics Simulations
        (2020, submitted).
      </Styled.p>
      <Styled.h3>Full list of scientific publications:</Styled.h3>
      <Styled.p>
        Otello M. Roscioni{' '}
        <a href="http://orcid.org/0000-0001-7815-6636">
          http://orcid.org/0000-0001-7815-6636
        </a>
      </Styled.p>
      <Styled.p>
        Matteo Ricci{' '}
        <a href="http://orcid.org/0000-0002-4534-6318">
          http://orcid.org/0000-0002-4534-6318
        </a>
      </Styled.p>
    </div>
  </SectionWrapper>
)

export default ScientificPublications
