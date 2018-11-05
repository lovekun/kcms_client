<style scoped lang="less">

</style>
<template>
    <div style="height: 100%">
        <Row :gutter=32 style="margin: 0px; height: 100%">
        <Col span="10" style="height: 100%">
        <Card :bordered="false" style="height: 100%">
        <div class="btn">
            <Button type="text" long size=large>
                <span>未读消息</span>
                <Badge count="10" style="float: right"></Badge>
            </Button>
        </div>
        <div class="btn">
            <Button type="text" long size=large>
                <span>已读消息</span>
                <Badge count="10" style="float: right"></Badge>
            </Button>
        </div>
        <div class="btn">
            <Button type="text" long size=large>
                <span>回收站</span>
                <Badge count="10" style="float: right"></Badge>
            </Button>
        </div>
        </Card>
        </Col>
        <Col span="14" style="height: 100%">
        <Scroll :on-reach-bottom="handleReachBottom" height=550>
        <Card dis-hover v-for="(item, index) in list1" :key="index" style="margin: 0px 0">
        Content {{ item }}
        </Card>
        </Scroll>
        </Col>
        </Row>
    </div>
</template>

<script>
export default {
	data () {
		return {
			list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			invokeIdCnt: 0
		};
	},
	methods: {
		handleReachBottom () {
			return new Promise(resolve => {
				setTimeout(() => {
					const last = this.list1[this.list1.length - 1];
					for (let i = 1; i < 11; i++) {
						this.list1.push(last + i);
					}
					resolve();
				}, 2000);
			});
		}

	},
	mounted: function () {
		/*
        var ws = new WebSocket('ws://localhost:61614/stomp', 'stomp');
        switch (ws.readyState) {
            case WebSocket.CONNECTING:
            console.log("ws connecting");
            break;
            case WebSocket.OPEN:
            console.log("ws open");

            break;
            case WebSocket.CLOSING:
            console.log("ws clonsing");

            break;
            case WebSocket.CLOSED:
            console.log("ws closed");
            break;
            default:
            console.log("ws...");
            break;
        }
        ws.onopen = function () {
            ws.send('Hello Server!');
            console.log("ws connect");
        }
        ws.onmessage = function(evt) {
            console.log( "Received Message: " + evt.data);
            ws.close();
        };
         */
	}

};
</script>
