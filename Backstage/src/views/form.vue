<template>
    <div class="container">
        <div class="form-box">
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
                    <!-- <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item prop="date2">
                            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%">
                            </el-time-picker>
                        </el-form-item>
                    </el-col> -->
                </el-form-item>
				<!-- <el-form-item label="城市级联" prop="options">
					<el-cascader :options="options" v-model="form.options"></el-cascader>
				</el-form-item> -->
				<!-- <el-form-item label="选择开关" prop="delivery">
					<el-switch v-model="form.delivery"></el-switch>
				</el-form-item> -->
				<!-- <el-form-item label="多选框" prop="type">
					<el-checkbox-group v-model="form.type">
						<el-checkbox label="步步高" name="type"></el-checkbox>
						<el-checkbox label="小天才" name="type"></el-checkbox>
						<el-checkbox label="imoo" name="type"></el-checkbox>
					</el-checkbox-group>
				</el-form-item> -->
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
		</div>
	</div>
    <div class="container">
		<div class="content-title">支持拖拉</div>
		<div class="plugins-tips">
			Element Plus自帶上傳組件。 訪問地址：
			<a href="https://element-plus.org/zh-CN/component/upload.html" target="_blank">Element Plus Upload</a>
		</div>
		<el-upload class="upload-demo" drag action="http://jsonplaceholder.typicode.com/api/posts/" multiple :on-change="handle">
			<el-icon class="el-icon--upload"><upload-filled /></el-icon>
			<div class="el-upload__text">
				將文件拉到此處，或
				<em>點擊上傳</em>
			</div>
			<template #tip>
				<div class="el-upload__tip">只能上傳 png 文件，且不超過 500kb</div>
			</template>
		</el-upload>

		<div class="content-title">支持剪裁</div>
		<div class="plugins-tips">
			vue-cropperjs：一个封装了 cropperjs 的 Vue 组件。 訪問地址：
			<a href="https://github.com/Agontuk/vue-cropperjs" target="_blank">vue-cropperjs</a>。 示例请查看
			<router-link to="/user">个人中心</router-link>
		</div>
	</div>
    				<el-form-item>
					<el-button type="primary" @click="onSubmit(formRef)">表單提交</el-button>
					<el-button @click="onReset(formRef)">重置表單</el-button>
				</el-form-item>
</template>
<script setup lang="ts" name="baseform">
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';
const handle = (rawFile:any)=>{
	console.log(rawFile);
}
const options = [
	{
		value: 'collect',
		label: '收藏與鑑賞',
		children: [
			{
				value: 'painting',
				label: '繪畫',
				children: [
					{
						value: 'art',
						label: '藝術'
					},
					{
						value: 'photography',
						label: '攝影'
					}
				]
			},
		]
	},
	// {
	// 	value: 'hunan',
	// 	label: '湖南省',
	// 	children: [
	// 		{
	// 			value: 'changsha',
	// 			label: '长沙市',
	// 			children: [
	// 				{
	// 					value: 'yuelu',
	// 					label: '岳麓区'
	// 				}
	// 			]
	// 		}
	// 	]
	// }
];
const rules: FormRules = {
	name: [{ required: true, message: '請輸入表單名稱', trigger: 'blur' }]
};
const formRef = ref<FormInstance>();
const form = reactive({
	sort: '',//類別
	product_name: '',//書名
	auther: '',//作者
    original_author:'',//原文作者
    translator:'',//譯者
    painter:'',//繪者
    publishing_house:'',//出版社
	publication_date: '',//出版日期
	language: '',//語言單選匡
    amount:'',//數量
    isbn:'',
    binding_method:'',//裝訂方式
    format:'',//詳細規格
    publish_area:'',//出版地
	introduction: '',//內容簡介
    auther_Introduction:'',//作者簡介
    list_price:'',//定價
    cost_price:'',//進價
    discount_price:'',//折扣價
    key_word:[],//關鍵字
    class_two:'',//類別二
    class_three:''//類別三
});
// 提交
const onSubmit = (formEl: FormInstance | undefined) => {
	// 表单校验
	if (!formEl) return;
	formEl.validate(valid => {
		if (valid) {
			console.log(form);
			ElMessage.success('提交成功！');
		} else {
			return false;
		}
	});
};
// 重置
const onReset = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.resetFields();
};
</script>
<style scoped>
.content-title {
	font-weight: 400;
	line-height: 50px;
	margin: 10px 0;
	font-size: 22px;
	color: #1f2f3d;
}

.pre-img {
	width: 100px;
	height: 100px;
	background: #f8f8f8;
	border: 1px solid #eee;
	border-radius: 5px;
}
.crop-demo {
	display: flex;
	align-items: flex-end;
}
.crop-demo-btn {
	position: relative;
	width: 100px;
	height: 40px;
	line-height: 40px;
	padding: 0 20px;
	margin-left: 30px;
	background-color: #409eff;
	color: #fff;
	font-size: 14px;
	border-radius: 4px;
	box-sizing: border-box;
}
.crop-input {
	position: absolute;
	width: 100px;
	height: 40px;
	left: 0;
	top: 0;
	opacity: 0;
	cursor: pointer;
}
</style>