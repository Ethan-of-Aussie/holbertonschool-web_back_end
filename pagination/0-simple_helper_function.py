#!/usr/bin/env python3
"""Module defines index_range"""


from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """This function paginates, returns a start and end indexes related to range of indexes"""
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
