import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    
    render() { 
        const { titleStyle } = style;
        const { id, title } = this.props.library.item;
        return (
            <TouchableWithoutFeedback
              onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}> {title} </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
const style = {
    titleStyle: {
        fontSize: 20
    }
};

export default connect(null, actions)(ListItem);
