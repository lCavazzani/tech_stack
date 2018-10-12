import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    renderDescription() {
        if (this.props.expanded) {
            return (
            <Text>{this.props.library.item.description}</Text>
            );
        }
    }
    
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
                    {this.renderDescription()}
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

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;
       return { expanded };
    };
export default connect(mapStateToProps, actions)(ListItem);
