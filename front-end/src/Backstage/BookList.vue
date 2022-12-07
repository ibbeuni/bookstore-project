<template>
    <div class="container">
        <!-- <div class="form-box">
            <el-form ref="formRef" :rules="rules" :model="form" label-width="80px">
				<el-form-item label="書籍名稱">
					<el-input v-model="form.product_name"></el-input>
				</el-form-item>
				<el-form-item label="作者" prop="" value="">
					<el-input v-model="form.auther"></el-input>
				</el-form-item>
				<el-form-item label="原文作者" prop="" value="">
					<el-input v-model="form.original_author"></el-input>
				</el-form-item>
				<el-form-item label="譯者">
					<el-input v-model="form.translator"></el-input>
				</el-form-item>
				<el-form-item label="繪者">
					<el-input v-model="form.painter"></el-input>
				</el-form-item>
				<el-form-item label="出版社">
					<el-input v-model="form.publishing_house"></el-input>
				</el-form-item>
                <el-form-item label="出版日期">
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker
                                type="publication_date"
                                placeholder="選擇日期"
                                v-model="form.publication_date"
                                style="width: 100%"
                            ></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
				<el-form-item label="單選匡" prop="language">
					<el-radio-group v-model="form.language">
						<el-radio label="繁體中文"></el-radio>
						<el-radio label="簡體中文"></el-radio>
					</el-radio-group>
				</el-form-item>
                <el-form-item label="數量" style="width:250px">
                    <el-input v-model="form.amount"></el-input>
                </el-form-item>
                <el-form-item label="ISBN" style="width:250px">
                    <el-input v-model="form.isbn"></el-input>
                </el-form-item>
                <el-form-item label="裝訂方式" style="width:250px">
                    <el-input v-model="form.binding_method"></el-input>
                </el-form-item>
                <el-form-item label="詳細規格">
					<el-input v-model="form.format"></el-input>
				</el-form-item>
                <el-form-item label="出版地" style="width:250px">
                    <el-input v-model="form.publish_area"></el-input>
                </el-form-item>
				<el-form-item label="內容簡介" prop="">
					<el-input type="textarea" rows="5" v-model="form.introduction"></el-input>
				</el-form-item>
				<el-form-item label="作者簡介" prop="">
					<el-input type="textarea" rows="5" v-model="form.auther_Introduction"></el-input>
				</el-form-item>
                <el-form-item label="定價" style="width:250px">
					<el-input v-model="form.list_price"></el-input>
				</el-form-item>
                <el-form-item label="進價" style="width:250px">
					<el-input v-model="form.cost_price"></el-input>
				</el-form-item>
                <el-form-item label="折扣價" style="width:250px">
					<el-input v-model="form.discount_price"></el-input>
				</el-form-item>
                <el-form-item label="關鍵字">
					<el-input v-model="form.key_word"></el-input>
				</el-form-item>
                <el-form-item label="類別二" prop="">
                <el-select v-model="form.class_two" placeholder="請選擇">
                    <el-option key="collect" label="收藏與鑑賞" value="collect"></el-option>
                    <el-option key="painting" label="繪畫" value="painting"></el-option>
                    <el-option key="art" label="藝術" value="art"></el-option>
                    <el-option key="photography" label="攝影" value="photography"></el-option>
                </el-select>
                <el-form-item label="類別三" style="width:250px">
					<el-input v-model="form.class_three"></el-input>
				</el-form-item>
            </el-form-item>
			</el-form>
		</div> -->
	</div>
</template>
<script>
// import type { FormInstance, FormRules } from 'element-plus';

// const rules: FormRules = {
// 	name: [{ required: true, message: '請輸入表單名稱', trigger: 'blur' }]
// };
// const ruleFormRef = ref('');
// const form = reactive({
// 	sort: '',//類別
// 	product_name: '',//書名
// 	auther: '',//作者
//     original_author:'',//原文作者
//     translator:'',//譯者
//     painter:'',//繪者
//     publishing_house:'',//出版社
// 	publication_date: '',//出版日期
// 	language: '',//語言單選匡
//     amount:'',//數量
//     isbn:'',
//     binding_method:'',//裝訂方式
//     format:'',//詳細規格
//     publish_area:'',//出版地
// 	introduction: '',//內容簡介
//     auther_Introduction:'',//作者簡介
//     list_price:'',//定價
//     cost_price:'',//進價
//     discount_price:'',//折扣價
//     key_word:[],//關鍵字
//     class_two:'',//類別二
//     class_three:''//類別三
// });
</script>