//Page Object
import { request } from "../../request/index.js";
Page({
    data: {
        swiperList: [],
        catesList: [],
        floorList: [],
        newurl: []
    },
    //options(Object)
    onLoad: function(options) {
        //wx.request({
        //url: '/home///swiperdata',

        //success: (result)=>{
        //this.setData({
        //swiperList:result.data.message
        // })
        //  }
        //});
        this.getSwiperList();
        this.getcatesList();
        this.getfloorList()
    },

    handleNewurl(e) {

        let { id } = e.currentTarget.dataset;
        let newurl = id.replace(/main/, 'index')
        this.setData({
            newurl: newurl
        })
    },
    getSwiperList() {
        request({ url: "/home/swiperdata" })
            .then(result => {
                this.setData({
                    swiperList: result
                })
            })
    },
    getcatesList() {
        request({ url: "/home/catitems" })
            .then(result => {
                this.setData({
                    catesList: result
                })
            })
    },
    getfloorList() {
        request({ url: "/home/floordata" })
            .then(result => {
                this.setData({
                    floorList: result
                })
            })
    },
})