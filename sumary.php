<?php
namespace web\Developer;
class backend {
    private $tech = [];
    public function __construct($tech)
    {
        $this->tech = $tech;
    }
    public function getTecnologies(){
        return $this->tech;
    }
}
class Frontend extends backend{
    private $frameworks = [];
    public function setFrameworks(...$params){
        $this->frameworks = $params;
    }
}
$developer = new Frontend(['PHP', 'Laravel', 'MySQL', 'Linux']);
$developer->setFrameworks(['Laravel', 'React', '']);