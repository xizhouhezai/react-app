import React, { Component } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    ListView,
    StyleSheet,
} from 'react-native';

// 第三方组件
import {PullList} from 'react-native-pull';

import NavigationBar from '../component/NavigationBar';
import Cell from '../component/Cell';
import NoDataView from '../component/NoDataView';

export default class Home extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds,
            listHide: true,
        }
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData(resolve) {
        var formData = new FormData();
        formData.append("count","30");
        formData.append("mall","苏宁易购");
        setTimeout(()=>{
            fetch('http://guangdiu.com/api/getlist.php', {
                method: 'POST',
                header: {},
                body: formData,
            })
                .then((res) => res.json())
                .then((resData) => {
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(resData.data),
                        listHide: false
                    })
                }).done()
            if(resolve !== undefined) {
                setTimeout(() => {
                    resolve();
                }, 1000);
            }
        }, 1000)
    }

    componentDidMount() {
        this.fetchData();
    }

    renderRow(rowData) {
        return(
            <Cell
                imageUrl={rowData.image}
                category={rowData.title}
            />
        )
    }

    /* 判断网络是否链接来显示listview */
    listViewHide() {
        if(this.state.listHide === true) {
            return(
                <NoDataView />
            )
        } else {
            return(
                <PullList
                    onPullRelease={(resolve)=> this.fetchData(resolve)}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    initialListSize={5}
                />
            )
        }
    }

    render() {
        return(
            <View style={{flex: 1, backgroundColor: '#fff',}}>
                <NavigationBar
                    titleView={<Image style={{width: 66, height: 20}} source={{uri: 'navtitle_home_down_66x20'}}/>}
                    style={{backgroundColor:'#fff',borderBottomWidth: 1,borderBottomColor: '#eee'}}
                    leftButton={<TouchableOpacity style={{padding: 8}} onPress={() => {
                        this.props.getNavigation.navigate('HalfHour')
                    }
                }><Image style={{width: 26, height: 26,tintColor:'green'}} source={{uri: 'hot_icon_20x20'}}/></TouchableOpacity>}
                    rightButton = {<TouchableOpacity style={{padding: 8}}><Image style={{width: 26, height: 26,tintColor:'green'}} source={{uri: 'search_icon_20x20'}}/></TouchableOpacity>}
                />
                {/* 判断网络是否链接来显示listview */}
                { this.listViewHide() }
            </View>
        )
    }
}
