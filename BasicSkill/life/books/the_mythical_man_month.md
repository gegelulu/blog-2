### 人月神话

* 焦油坑
  * 程序 -> 编程系统产品 `成本 x 9`
    * 编程产品(通用化、测试、文档、维护) `成本 x 3`
    * 编程系统(接口系统集成) `成本 x 3`
  * 编程的乐趣
    * 创建事物的快乐;
    * 开发对其他人有用的东西的乐趣;
    * 组装零部件拼凑成类似迷宫的乐趣;
    * 面对不重复的任务, 不断学习的乐趣;
    * 工作在如此易于驾驭的介质上的乐趣 —— 纯粹的思维活动;
  * 固有的苦恼
    * 由其它人设定目标;
      * 笔者的观点: 这点其实是可以转移的, 增强主管能动性。
    * 任何创造性活动都伴随着枯燥艰苦的劳动;
    * 人们通常期望项目接近结束时, 软件项目能收敛得快一些, 然而, 情况却是越接近完成, 收敛得越慢。
    * 产品在完成前总面临着陈旧过时的威胁。
* 人月神话(`人月是危险和带有欺骗性的神话, 因为它暗示人员数量和时间是可以相互替换的`)
  * `缺乏合理的进度排期`是造成项目滞后的最主要原因。
    1. 错误的假设「一切到将运作良好」。
    2. 错误的假设「人和月可以互换」, 即错误的认为开发人数越多, 进度越快。
    3. 未给系统测试预留时间。
       * 1⁄3 计划
       * 1⁄6 编码
       * 1⁄4 构件测试和早期系统测试
       * 1⁄4 系统测试, 所有的构件已完成
    4. 对进度缺少跟踪和监督。
    5. 当意识到进度偏移时, 下意识的反应是增加人力。
* 外科手术队伍
  * 优秀的专业程序员的生产率是较差的程序员的 10 倍。
  * 一位首席程序员, 类似于外科手术队伍的团队架构提供了一种方法: 既能获得由少数头脑产生的产品完整性, 又能得到多位协助人员的总体生产率, 还彻底地减少了沟通的工作量。
* 贵族专制、民主政治与系统设计
  * `概念的完整性`是系统设计中最重要的考虑因数。其设计必须由一个人或具有共识的小型团队完成。
  * 功能与理解上的复杂程度的比值(`易用性`)才是系统设计的最终测试标准。
  * 纪律、规则对行业是有益的。外部的体系结构规定实际上是增强, 而不是限制实现小组的创造性。
  * 体系结构(architecture)、设计实现(implementation)、物理实现(realization)的许多工作可以并行。
* 画蛇添足
  * `尽早交流`与`持续沟通`使结构师有较好的成本意识, 同时使开发人员获得对设计的信心。
  * 自律 —— 尤其是在设计第二个系统时。
    * 往往设计第一个系统时会比较谨慎, 其中碰见的一些装饰、润色功能往往会被安排至第二个系统中, 此时要格外谨慎。
* 贯彻执行
  * `形式化地设计定义`保证精确性; `记叙性定义`来加深理解。
  * 周会、年会
* 为什么巴比伦塔会失败
  * 巴比伦塔项目的失败是因为缺乏交流以及交流的结果 —— 组织。
  * 增加沟通、`交流`频次
    * 非正式地进行`简要技术陈述的常规项目会议`
    * 共享的`正式项目工作手册`
    * 电话、email
  * 组织架构
    * 团队组织的目标是为了减少必要的交流和协作量。
    * 为了减少交流, 组织结构包括了`人力划分`和`限定指责范围`。
    * 组织中的交流是网状而不是树状, 以克服树状组织结构中交流缺乏的困难。
      * 个人理解: 扁平化管理
    * 每个子项目具有两个领导角色 —— 产品负责人、技术主管。(产品负责人和技术主管可以是同个人, 但这两个角色的职能有很大的区别)
* 胸有成竹
  * 程序开发的复杂度随程序规模的而指数增长。
* 未雨绸缪
  * 系统的丢弃和重新设计可以一步完成, 也可以一块块地实现, 但这是`必须完成`的步骤。
  * 为舍弃而计划。
* 干将莫邪
  * 目标机器的使用需求量刚开始非常低, 突然出现爆发性的增长, 接着趋于平缓。
* 整体部分
  * 剔除 bug 的设计
    * 测试规格说明(文档)
    * `自上而下`的设计(精化步骤)
* 没有银弹
  * 现代软件系统中无法规避的内在特性
    * 复杂度
    * 保持一致性(导致复杂度)
    * 可变性
    * 不可见性
  * 应对措施
    * 借力(开源、第三方专业产品)
    * 需求精练、`快速原型化`来验证
    * `增量`开发
    * 识别、培养顶级设计人员