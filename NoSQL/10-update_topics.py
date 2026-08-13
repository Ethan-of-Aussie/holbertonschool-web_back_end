#!/usr/bin/env python3
"""Defines update_topics"""


from pymongo import MongoClient


def update_topics(mongo_collection, name, topics):
    """Updates name's topics"""
    if not mongo_collection:
        return None
    return mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
