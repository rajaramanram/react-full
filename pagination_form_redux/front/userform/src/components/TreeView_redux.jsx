import React from 'react';
import PropTypes from 'prop-types';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';

export default function CreateTreeView() {
    return (
        <TreeView>
        <TreeItem nodeId="1" label="Countries">
            <TreeItem nodeId="2" label="India" >
                <TreeItem nodeId="9" label="TamilNadu" />
                <TreeItem nodeId="10" label="kerala" />
                <TreeItem nodeId="11" label="andra" />
            </TreeItem>
            <TreeItem nodeId="3" label="pakistan">
                <TreeItem nodeId="9" label="Child 1" />
                <TreeItem nodeId="10" label="Child 2" />
                <TreeItem nodeId="11" label="Child 3" />
            </TreeItem>
            <TreeItem nodeId="4" label="china" >
                <TreeItem nodeId="9" label="Child 4" />
                <TreeItem nodeId="10" label="Child 5" />
                <TreeItem nodeId="11" label="Child 6" />
            </TreeItem>
        </TreeItem>
        </TreeView>
    );
    }