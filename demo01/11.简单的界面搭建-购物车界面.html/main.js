const app = new Vue({
    el:'#app',
    data:{
        books:[
            {
                id:1,
                name:'《算法导论》',
                data:'2006-9',
                price:85.00,
                count:1
            },
            {
                id:2,
                name:'《java开发实战》',
                data:'2006-2',
                price:65.00,
                count:1
            },
            {
                id:3,
                name:'《解忧杂货铺》',
                data:'2016-9',
                price:55.00,
                count:1
            },
            {
                id:4,
                name:'《活着》',
                data:'2019-9',
                price:35.00,
                count:1
            },
        ],
  
    },
    methods:{
        getFinalPrice(price) {
            return '￥'+ price.toFixed(2)
        },
        increment (index){
            this.books[index].count++;
        },
        decrement (index){
            this.books[index].count--;
        },
        removeBtn(index){
            this.books.splice(index,1)
        }
    },
    filters: {
        // 过滤器
        showPrice(price){
            return '￥'+ price.toFixed(2)
        }
    },
    computed: {
        totalPrice(){
            let sum = 0;

            // 1.普通的for循环
            // for(let i=0; i<this.books.length;i++){
            //     sum+=this.books[i].price * this.books[i].count
            // }
            
            // 2.for (let 索引值 in 数组)
            // for (let i in this.books){
            //     sum+=this.books[i].price * this.books[i].count
            // }

            // 3. for ..of
            // for (let item of this.books){
            //     sum+=item.price * item.count
            // }

            // 4.reduce
            sum = this.books.map(item => item.price * item.count).reduce((pre, item)=> pre + item)
            return sum;
        }
    }
})

