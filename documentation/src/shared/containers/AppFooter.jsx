import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';

import AppFooter from 'components/AppFooter';

export default connect(({ ui: { quickNavigation } }) => quickNavigation)(AppFooter);