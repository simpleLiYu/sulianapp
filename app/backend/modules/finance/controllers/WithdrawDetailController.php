<?php
/****************************************************************
 * Author:  libaojia
 * Date:    2017/11/14 上午10:54
 * Email:   livsyitian@163.com
 * QQ:      995265288
 * User:    芸众商城 www.yunzshop.com
 ****************************************************************/

namespace app\backend\modules\finance\controllers;


use app\backend\modules\finance\models\Withdraw;
use app\common\components\BaseController;
use app\common\exceptions\AppException;
use app\common\exceptions\ShopException;
use app\common\facades\Setting;

class WithdrawDetailController extends BaseController
{

    //提现记录 model 实例
    protected $withdrawModel;

    /**
     * @throws ShopException
     */
    public function preAction()
    {
        parent::preAction(); // TODO: Change the autogenerated stub
        $this->setWithdrawModel();

    }

    /**
     * 提现记录详情 接口
     * @return string
     * @throws \Throwable
     */
    public function index()
    {
        return view('finance.withdraw.withdraw-info', [
            'item' => $this->withdrawModel,
            'set' => Setting::get('plugin.commission'),
        ])->render();
    }


    /**
     * 附值 withdrawModel
     * @throws ShopException
     */
    protected function setWithdrawModel()
    {
        $this->withdrawModel = Withdraw::find($this->getPostWithdrawId());
        if (!$this->withdrawModel) {
            throw new ShopException('数据不存在或已被删除!');
        }
    }


    /**
     * 获取 POST 提交的ID主键
     * @return string
     * @throws ShopException
     */
    protected function getPostWithdrawId()
    {
        $withdraw_id = trim(\YunShop::request()->id);
        if (empty($withdraw_id)) {
            throw new ShopException('数据错误，请重试!');
        }
        return $withdraw_id;
    }


}
