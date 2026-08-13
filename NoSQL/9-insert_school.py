#!/usr/bin/env python3
"""Defines insert_school"""


from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    """Insert new document into collection based on kwargs"""
    if not mongo_collection:
        return None
    res = mongo_collection.insert_one(kwargs)
    return res.inserted_id