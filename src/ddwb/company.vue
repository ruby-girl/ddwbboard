<template>
    <div class="company">
        <headers></headers>
        <i-button class="button" style="line-height:19px; background: rgb(34, 70, 101);border: rgb(34, 70, 101);color: #fff;" @click="() => {this.$router.push({path: '/'})}">返回</i-button>
        <div class="company-wrapper">
            <div class="message-team">
                <div class="message">
                    <div class="desc">
                        <div class="title">基础信息</div>
                        <div class="descs">Basic Information</div>
                    </div>
                    <div class="message-wrapper">
                        <div v-for="(item,index) in message" :key="index">
                            <span class="name" style="display: inline-block; width:150px; text-align:right;color: #FAFF66">{{item.name}}</span>
                            <span class="message-desc">{{item.desc}}</span>
                        </div>
                    </div>
                </div>
                <div class="team">
                    <div class="desc">
                        <div class="title">服务团队</div>
                        <div class="descs">Service Team</div>
                    </div>
                    <table class="team-table">
                        <thead>
                            <th>姓名</th>
                            <th>专业背景</th>
                            <th>学校</th>
                            <th>学历</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>沈传坤</td>
                                <td>农业推广</td>
                                <td>四川农业大学</td>
                                <td>硕士</td>
                            </tr>
                            <tr>
                                <td>谢亚东</td>
                                <td>财务管理</td>
                                <td>西南财经天府学院</td>
                                <td>本科</td>
                            </tr>
                            <tr>
                                <td>徐国莉</td>
                                <td>农学</td>
                                <td>四川农业大学</td>
                                <td>本科</td>
                            </tr>
                            <tr>
                                <td>易国平</td>
                                <td>农学</td>
                                <td>四川农业大学</td>
                                <td>本科</td>
                            </tr>
                            <tr>
                                <td>王平</td>
                                <td>电子商务</td>
                                <td>四川师范大学</td>
                                <td>本科</td>
                            </tr>
                            <tr>
                                <td>冯天龙</td>
                                <td>电子与信息工程</td>
                                <td>辽宁科技大学</td>
                                <td>本科</td>
                            </tr>
                            <tr>
                                <td>钟红娟</td>
                                <td>会计</td>
                                <td>西华大学</td>
                                <td>大专</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="company-info">
                <div class="info">
                    <div class="desc">
                        <div class="title">公司简介</div>
                        <div class="descs">Company profile</div>
                    </div>
                    <div class="info-wrapper">
                        <img src="../assets/ddwb.png" width="100%" height="200px" alt="">
                        <p class="company-desc" style="margin-top:20px">四川代代为本农业科技有限公司于2010年成立，位于三台县芦溪工业集中区，公司致力川产道地药材产业化发展，荣获省级农业产业化经营重点龙头企业、科技型中小企业等荣誉称号，先后承担国家科技部、国家发改委、国家中医药管理局、省科技厅等省部级科研项目10余项。</p>
                        <p>公司注重科研能力的积累，组建了企业技术中心，联合北京大学药学院、中国中医科学院、成都中医药大学等实力科研院所，构建川麦冬全产业链研发平台，是成都中医药大学就业实践与教学实习基地，西南交通大学新品系选育研究基地。通过近十年的积累和沉淀，公司探索形成了“公司+基地+专业合作社+农户”的道地药材产业化运营模式”和 “七统一分”管理模式，以道地药材全产业链数字化管理云平台（AMS-ERP）为工具，实现中药农业全程动态追溯食品（饮料、配方茶、炖料包）、麦冬日化产品三大衍生产品系列。公司将以“不急不燥、从容人生”的产品理念，贴心服务客户，与客户携手共进，共创价值。</p>
                    </div>
                </div>
                <div class="videos">
                    <div>
                        <div class="desc" style="margin:0">
                            <div class="title">公司介绍</div>
                            <div class="descs">Company introduction</div>
                        </div>
                        <div class="video-wrapper">
                            <video src="company.mp4" controls></video>
                        </div>
                    </div>
                    <div>
                        <div class="desc" style="margin:0">
                            <div class="title">产品介绍</div>
                            <div class="descs">Product introduction</div>
                        </div>
                        <div class="video-wrapper">
                            <video src="maidong.mp4" controls></video>
                        </div>
                    </div>
                </div>
            </div>
            <div class="honors">
                <div class="model">
                    <div class="desc">
                        <div class="title">管理模式</div>
                        <div class="descs">Service Model</div>
                    </div>
                    <div class="servcie">
                        <img src="../assets/service.jpg" width="100%" height="320px" alt="">
                    </div>
                </div>
                <div class="main-honors">
                    <div class="desc">
                        <div class="title">主要荣誉</div>
                        <div class="descs">Main honors</div>
                    </div>
                    <div style="width: 100%;background-color: #26374c;height: 340px">
                        <div class="lunbo">
                            <Carousel autoplay loop class="lunbo-wrapper">
                                <CarouselItem>
                                    <img src="../assets/home_0.jpg" width="100%" height="340px" alt="">
                                </CarouselItem>
                                <CarouselItem>
                                    <img src="../assets/home_1.jpg" width="100%" height="340px" alt="">
                                </CarouselItem>
                                <CarouselItem>
                                    <img src="../assets/home_2.jpg" width="100%" height="340px" alt="">
                                </CarouselItem>
                                <CarouselItem>
                                    <img src="../assets/home_3.jpg" width="100%" height="340px" alt="">
                                </CarouselItem>
                                <CarouselItem>
                                    <img src="../assets/home_4.jpg" width="100%" height="340px" alt="">
                                </CarouselItem>
                                <CarouselItem>
                                    <img src="../assets/home_5.jpg" width="100%" height="340px" alt="">
                                </CarouselItem>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headers from '@/components/header/header'

export default {
    name: 'company',
    components: {
        headers
    },
    data () {
        return {
            message: [{
                name: '企业名称：',
                desc: '四川代代为本农业科技有限公司'
            }, {
                name: '地理位置：',
                desc: '四川省绵阳市三台县'
            }, {
                name: '主要品种：',
                desc: '麦冬'
            }, {
                name: '管理面积(亩)：',
                desc: '17000'
            }, {
                name: '管理合作社(个)：',
                desc: '18'
            }]
        }
    }
}
</script>
<style lang="stylus">
    .button
        background-color #2A9EF5
        border-color #212F41
        position absolute
        height 30px
        color #fff
        width 80px
        top 65px
        left 15px
    .company-wrapper
        display flex
        margin 20px 15px 20px
        .desc
            height 45px
            color #ffffff
            font-size 16px
            padding-left 10px
            box-sizing border-box
            background-color #26374C
            border-bottom 1px solid rgba(255,255,255,0.08235294117647057)
            .title
                height 20px
                color #289CF4
                line-height 30px
            .descs
                font-size 10px
        .message-team
            flex 1.2
            height 100%
            .message
                height 315px
                .message-wrapper
                    background-color #26374C
                    font-size 18px
                    height 270px
                    display flex
                    flex-direction column
                    justify-content space-around
                    div
                        flex 1
                        margin-left 10px
                        color #fff
                    div:nth-of-type(1)
                        margin-top 8px
            .team
                margin-top 20px
                .team-table
                    height 470px
                    width 100%
                    color #fff
                    tr, th
                        background-color #26374C
                        text-align center
                        font-weight bold
                        padding 5px 5px
                    td, th
                        border 1px solid rgba(102, 204, 204, 0.6)
                    th
                        color #289CF4
        .company-info
            flex 2
            margin 0 20px
            height 850px
            .info
                height 560px
                background-color #26374C
                .info-wrapper
                    p
                        color #fff
                        text-indent 2em
                        margin 0
                        line-height 30px
                        font-size 16px
                        padding 0 10px
                        box-sizing border-box
            .videos
                margin-top 20px
                height 270px
                display flex
                div
                    flex 1
                    .video-wrapper
                        background-color #26374C
                        video
                            height 225px
                            width 100%
                div:nth-of-type(1)
                    margin-right 20px
        .honors
            flex 1
            .model
                .servcie
                    height 380px
                    background-color #26374C
                    img
                        position relative
                        top 50%
                        transform translateY(-50%)
            .main-honors
                margin-top 40px
                .lunbo
                    height 100%
                    width 400px
                    position relative
                    left 50%
                    transform translateX(-50%)
                    .lunbo-wrapper
                        height 100%
                        .ivu-carousel-arrow
                            background-color rgba(0, 0, 0, 0.3)
                        .ivu-carousel-arrow:hover
                            background-color rgba(0, 0, 0, 0.8)
@media screen and (min-width: 2000px)
  .lunbo-title
    height 350px !important
  .name
    width 185px !important
    white-space nowrap
</style>
