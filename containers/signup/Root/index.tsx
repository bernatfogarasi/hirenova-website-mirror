import Page from "components/Page"
import styled from "styled-components"

import SectionSignUp from "./SectionSignUp"

const Wrapper = styled(Page)``

const SignUp = () => {
  return (
    <Wrapper
      title="Sign Up"
      showSignUp={false}
      showFooter={false}
      displayConditionAuthId="not_logged_in"
      displayConditionProfileTypeId="always"
    >
      <SectionSignUp />
    </Wrapper>
  )
}

export default SignUp
