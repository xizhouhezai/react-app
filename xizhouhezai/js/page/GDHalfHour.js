import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    ListView,
    StyleSheet,
} from 'react-native';

// 第三方组件
import {PullList} from 'react-native-pull';

import NavigationBar from '../component/NavigationBar';
import Cell from '../component/Cell';
import NoDataView from '../component/NoDataView';

export default class HalfHour extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds,
            listHide: false,
        }
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData(resolve) {
        setTimeout(()=>{
            fetch('http://guangdiu.com/api/gethots.php')
                .then((res) => res.json())
                .then((resData) => {
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(resData.data),
                        listHide: true
                    })
                }).done()
            if(resolve !== undefined) {
                setTimeout(() => {
                    resolve();
                }, 1000);
            }
        }, 2000)
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
        if(this.state.listHide === false) {
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
                    renderHeader={this.listHeader}
                />
            )
        }
    }

    // list的头部

    listHeader() {
        return(
            <View>
                <Text style={styles.infoStyle}>
                    根据每条折扣的点击进行统计，每5分钟更新一次
                </Text>
            </View>
        )
    }

    render() {
        return(
            <View style={{flex: 1,backgroundColor: '#fff',}}>
                <NavigationBar
                    titleView={<Text style={{color: 'black',fontSize: 18,}}>近半小时热门</Text>}
                    style={{backgroundColor:'#fff',borderBottomWidth: 1,borderColor: '#eee'}}
                    leftButton={<View></View>}
                    rightButton = {<TouchableOpacity style={{padding: 15}} onPress={()=>this.props.navigation.navigate('HomePage')}><Text style={{color: 'green'}}>关闭</Text></TouchableOpacity>}
                />
                
                {/* 判断网络是否链接来显示listview */}
                { this.listViewHide() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    infoStyle: {
        height: 50,
        lineHeight: 32,
        textAlign: 'center',
        backgroundColor: '#F8F8F8',
    }
})
