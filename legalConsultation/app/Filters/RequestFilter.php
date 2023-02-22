<?php
namespace App\Filters;

class RequestFilter extends QueryFilter {

    public function status($status) {
        return $this->builder->where('status', $status);
//        return $this->builder->whereColumn([
//            ['status', $status],
//            ['created_at','>=',$from]
//        ]);
    }

}
