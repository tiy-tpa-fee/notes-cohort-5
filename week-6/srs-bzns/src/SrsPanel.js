import React from 'react'
import { Panel, PanelHeader } from 'rebass'

const SrsPanel = (props) => {
  return <Panel theme="warning">
    <PanelHeader>
      {props.title}
    </PanelHeader>
    {props.children}
  </Panel>
}

SrsPanel.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.node
}

export default SrsPanel
